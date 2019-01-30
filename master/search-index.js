var N = null;var searchIndex = {};
searchIndex["green_thumb"]={"doc":"","items":[[5,"main","green_thumb","",N,[[]]],[0,"logging","","",N,N],[5,"logging_init","green_thumb::logging","Basic abstraction for initializing logging. Currently…",N,[[]]],[0,"db","green_thumb","",N,N],[3,"DataMgr","green_thumb::db","",N,N],[12,"conn","","",0,N],[0,"crop","","",N,N],[3,"Crop","green_thumb::db::crop","Tracking the growth and harvest of a specific plant",N,N],[12,"num_plants","","Number of plants sown",1,N],[12,"date_planted","","The date that the plants were planted",1,N],[12,"plant_id","","The id of the plant sown",1,N],[12,"id","","Unique id for the crop",1,N],[11,"new","","Create a new crop instance",1,[[["connection"],["i64"],["u32"],["naivedate"]],["self"]]],[11,"planned_harvest_date","","Provides the ideal harvest date based on planting date and…",1,[[["self"],["connection"]],["naivedate"]]],[0,"plant","green_thumb::db","The design behind the plant module is to act as the main…",N,N],[3,"Plant","green_thumb::db::plant","Standard type to define all things to grow",N,N],[12,"id","","",2,N],[12,"name","","Name of a plant.",2,N],[12,"plant_type","","Seasonal type of plant",2,N],[12,"zones","","Growing zones defined by USDA that a plant can survive in.…",2,N],[12,"notes","","Any description or textual things to track about the plant.",2,N],[12,"days_to_maturity","","Number of days from planting until germination occurs",2,N],[4,"PlantType","","Seasonal variety types of plants",N,N],[13,"Annual","","Plant has one growing season and needs to be replanted…",3,N],[13,"Perennial","","Plant survives over multiple growing seasons.",3,N],[17,"_IMPL_SERIALIZE_FOR_PlantType","","",N,N],[17,"_IMPL_DESERIALIZE_FOR_PlantType","","",N,N],[11,"new","","Create a new plant type",2,[[["connection"],["string"],["i64"],["planttype"]],["self"]]],[11,"get_plants","","Access all defined plants",2,[[["connection"]],["result",["vec"]]]],[11,"get_plant_by_id","","Obtain a plant based on the database id provided",2,[[["connection"],["i64"]],["result",["plant"]]]],[0,"task","green_thumb::db","",N,N],[3,"Task","green_thumb::db::task","Standard task for things that need to be completed",N,N],[12,"id","","Database unique id to identify instance",4,N],[12,"text","","Task description of what needs to be done",4,N],[12,"is_completed","","Denote that task has been completed",4,N],[12,"completed_date","","Date and Time that task is completed",4,N],[11,"new","","Create a new instance of a Task",4,[[["connection"],["string"]],["self"]]],[11,"get_completed","","Get the completed state",4,[[["self"]],["bool"]]],[11,"set_completed","","Mark a task as completed",4,[[["self"],["connection"]]]],[11,"get_completed_date","","Get the date that the task was completed. This cannot be…",4,[[["self"]],["datetime",["local"]]]],[11,"get_text","","Get Task text field",4,[[["self"]],["string"]]],[11,"set_text","","Update Task text field",4,[[["self"],["connection"],["string"]]]],[11,"get_tasks","","Access all tasks",4,[[["connection"]],["result",["vec"]]]],[11,"get_task_by_id","","",4,[[["connection"],["i64"]],["result",["task"]]]],[11,"new","green_thumb::db","",0,[[["string"]],["self"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","green_thumb::db::crop","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"from","green_thumb::db::plant","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","green_thumb::db::task","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"eq","green_thumb::db::plant","",3,[[["self"],["planttype"]],["bool"]]],[11,"eq","green_thumb::db::task","",4,[[["self"],["task"]],["bool"]]],[11,"ne","","",4,[[["self"],["task"]],["bool"]]],[11,"clone","","",4,[[["self"]],["task"]]],[11,"fmt","green_thumb::db::plant","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","green_thumb::db::task","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","green_thumb::db::plant","",3,[[["self"],["formatter"]],["result",["error"]]]],[11,"from_str","","",3,[[["str"]],["result",["planttype"]]]],[11,"column_result","","",3,[[["valueref"]],["fromsqlresult"]]],[11,"to_sql","","",3,[[["self"]],["result",["tosqloutput"]]]],[11,"serialize","","",3,[[["self"],["__s"]],["result"]]],[11,"deserialize","","",3,[[["__d"]],["result"]]],[11,"as_static","","",3,[[["self"]],["str"]]]],"paths":[[3,"DataMgr"],[3,"Crop"],[3,"Plant"],[4,"PlantType"],[3,"Task"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
