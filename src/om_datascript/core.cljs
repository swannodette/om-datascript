(ns om-datascript.core
  (:require [clojure.browser.repl :as repl]
            [datascript :as d]
            [om.next.protocols :as p]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [goog.dom :as gdom]
            [goog.object :as gobj]
            [cljs.pprint :refer [pprint]]))

(defonce repl-conn
  (repl/connect "http://localhost:9000/repl"))

(defmulti ds-query (fn [_ root _] root))

(defmethod ds-query :app/root
  [db _ selector]
  (d/q '[:find (pull ?e ?selector)
         :in $ ?selector
         :where [?e :app/title]]
    db (conj selector :db/id)))

(deftype DataScriptStore [db conn tx-report index]
  p/IPull
  (pull [this selector _]
    (let [[root root-selector] (first selector)]
      (ds-query db root root-selector)))
  p/IPush
  (push [this tx-data _]
    (DataScriptStore. @conn conn (d/transact! conn [entity]) (atom @index)))
  p/IStore
  (commit [this tx-data component]
    (let [{:keys [tx-report] :as next} (p/push this tx-data nil)]
      (when component
        (om/update-props component (db/entity db (-> component om/props :db/id)))
        ;; TODO: grab component and update its props - David
        [next component])))
  p/IComponentIndex
  (index-component [this component]
    (swap! index assoc (:db/id (om/props component)) component))
  (drop-component [this component]
    (swap! index dissoc (:db/id (om/props component)))))

(defn increment! [c props]
  (println props)
  #_(om/commit! c (update-in props [:state/count] inc)))

(defui Counter
  static om/IQuery
  (query [this]
    '[:db/id :state/count])
  Object
  (render [this]
    (let [{:keys [:state/count] :as props} (om/props this)]
      (dom/div nil
        (dom/p nil (str "Count: " count))
        (dom/button
          #js {:onClick (fn [_] (increment! this props))}
          "Click Me!")))))

(def counter (om/create-factory Counter))

(defui HelloWorld
  static om/IQueryParams
  (params [this]
    {:counter (om/query Counter)})
  static om/IQuery
  (query [this]
    '{:app/root [:app/title {:app/state ?counter}]})
  Object
  (render [this]
    (let [{:keys [:app/title :app/state] :as props} (ffirst (om/props this))]
      (apply dom/div nil
        (dom/h2 nil title)
        (map #(counter (assoc %1 :react-key %2)) state (range))))))

(def schema
  {:app/state {:db/valueType :db.type/ref
               :db/cardinality :db.cardinality/many
               :db/isComponent true}})

(def conn (d/create-conn schema))

(d/transact! conn
  [{:db/id -1
    :app/title "Hello, World!"
    :app/state [{:db/id -1 :state/count 0}
                {:db/id -2 :state/count 0}
                {:db/id -3 :state/count 0}]}])

(def store (atom (DataScriptStore. @conn conn)))

(defn main []
  (om/root HelloWorld store
    {:target (gdom/getElement "app")}))

(main)