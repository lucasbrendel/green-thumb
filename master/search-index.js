var N=null,E="",T="t",U="u",searchIndex={};
var R=["green_thumb","connection","naivedate","green_thumb::db","result","plant","string","green_thumb::db::crop","try_from","try_into","borrow_mut","green_thumb::db::plant","type_id","green_thumb::db::task","borrow","typeid","planttype","formatter","tosqloutput","PlantType"];

searchIndex["green_thumb"]={"doc":E,"i":[[5,"main",R[0],E,N,[[]]],[0,"logging",E,E,N,N],[5,"logging_init","green_thumb::logging","Basic abstraction for initializing logging. Currently…",N,[[]]],[0,"db",R[0],E,N,N],[3,"DataMgr",R[3],E,N,N],[12,"conn",E,E,0,N],[0,"crop",E,E,N,N],[3,"Crop",R[7],"Tracking the growth and harvest of a specific plant",N,N],[12,"num_plants",E,"Number of plants sown",1,N],[12,"date_planted",E,"The date that the plants were planted",1,N],[12,"plant_id",E,"The id of the plant sown",1,N],[12,"id",E,"Unique id for the crop",1,N],[11,"new",E,"Create a new crop instance",1,[[["i64"],[R[1]],["u32"],[R[2]]],["self"]]],[11,"planned_harvest_date",E,"Provides the ideal harvest date based on planting date and…",1,[[["self"],[R[1]]],[R[2]]]],[0,R[5],R[3],"The design behind the plant module is to act as the main…",N,N],[3,"Plant",R[11],"Standard type to define all things to grow",N,N],[12,"id",E,E,2,N],[12,"name",E,"Name of a plant.",2,N],[12,"plant_type",E,"Seasonal type of plant",2,N],[12,"zones",E,"Growing zones defined by USDA that a plant can survive in.…",2,N],[12,"notes",E,"Any description or textual things to track about the plant.",2,N],[12,"days_to_maturity",E,"Number of days from planting until germination occurs",2,N],[4,R[19],E,"Seasonal variety types of plants",N,N],[13,"Annual",E,"Plant has one growing season and needs to be replanted…",3,N],[13,"Perennial",E,"Plant survives over multiple growing seasons.",3,N],[17,"_IMPL_SERIALIZE_FOR_PlantType",E,E,N,N],[17,"_IMPL_DESERIALIZE_FOR_PlantType",E,E,N,N],[11,"new",E,"Create a new plant type",2,[[["i64"],[R[1]],[R[6]],[R[16]]],["self"]]],[11,"get_plants",E,"Access all defined plants",2,[[[R[1]]],[["vec",[R[5]]],[R[4],["vec"]]]]],[11,"get_plant_by_id",E,"Obtain a plant based on the database id provided",2,[[["i64"],[R[1]]],[[R[5]],[R[4],[R[5]]]]]],[0,"task",R[3],E,N,N],[3,"Task",R[13],"Standard task for things that need to be completed",N,N],[12,"id",E,"Database unique id to identify instance",4,N],[12,"text",E,"Task description of what needs to be done",4,N],[12,"is_completed",E,"Denote that task has been completed",4,N],[12,"completed_date",E,"Date and Time that task is completed",4,N],[11,"new",E,"Create a new instance of a Task",4,[[[R[6]],[R[1]]],["self"]]],[11,"get_completed",E,"Get the completed state",4,[[["self"]],["bool"]]],[11,"set_completed",E,"Mark a task as completed",4,[[["self"],[R[1]]]]],[11,"get_completed_date",E,"Get the date that the task was completed. This cannot be…",4,[[["self"]],[["datetime",["local"]],["local"]]]],[11,"get_text",E,"Get Task text field",4,[[["self"]],[R[6]]]],[11,"set_text",E,"Update Task text field",4,[[["self"],[R[1]],[R[6]]]]],[11,"get_tasks",E,"Access all tasks",4,[[[R[1]]],[["vec",["task"]],[R[4],["vec"]]]]],[11,"get_task_by_id",E,E,4,[[["i64"],[R[1]]],[["task"],[R[4],["task"]]]]],[11,"new",R[3],E,0,[[[R[6]]],["self"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[8],E,E,0,[[[U]],[R[4]]]],[11,R[9],E,E,0,[[],[R[4]]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[14],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[["self"]],[R[15]]]],[11,"from",R[7],E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[8],E,E,1,[[[U]],[R[4]]]],[11,R[9],E,E,1,[[],[R[4]]]],[11,R[10],E,E,1,[[["self"]],[T]]],[11,R[14],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[["self"]],[R[15]]]],[11,"from",R[11],E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[8],E,E,2,[[[U]],[R[4]]]],[11,R[9],E,E,2,[[],[R[4]]]],[11,R[10],E,E,2,[[["self"]],[T]]],[11,R[14],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[["self"]],[R[15]]]],[11,"to_string",E,E,3,[[["self"]],[R[6]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[8],E,E,3,[[[U]],[R[4]]]],[11,R[9],E,E,3,[[],[R[4]]]],[11,R[10],E,E,3,[[["self"]],[T]]],[11,R[14],E,E,3,[[["self"]],[T]]],[11,R[12],E,E,3,[[["self"]],[R[15]]]],[11,"to_owned",R[13],E,4,[[["self"]],[T]]],[11,"clone_into",E,E,4,[[[T],["self"]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[8],E,E,4,[[[U]],[R[4]]]],[11,R[9],E,E,4,[[],[R[4]]]],[11,R[10],E,E,4,[[["self"]],[T]]],[11,R[14],E,E,4,[[["self"]],[T]]],[11,R[12],E,E,4,[[["self"]],[R[15]]]],[11,"eq",R[11],E,3,[[["self"],[R[16]]],["bool"]]],[11,"eq",R[13],E,4,[[["self"],["task"]],["bool"]]],[11,"ne",E,E,4,[[["self"],["task"]],["bool"]]],[11,"clone",E,E,4,[[["self"]],["task"]]],[11,"fmt",R[11],E,3,[[[R[17]],["self"]],[[R[4],["error"]],["error"]]]],[11,"fmt",E,E,2,[[["self"],[R[17]]],[R[4]]]],[11,"fmt",E,E,3,[[["self"],[R[17]]],[R[4]]]],[11,"fmt",R[13],E,4,[[["self"],[R[17]]],[R[4]]]],[11,"from_str",R[11],E,3,[[["str"]],[[R[16]],[R[4],[R[16]]]]]],[11,"column_result",E,E,3,[[["valueref"]],["fromsqlresult"]]],[11,"to_sql",E,E,3,[[["self"]],[[R[4],[R[18]]],[R[18]]]]],[11,"serialize",E,E,3,[[["self"],["__s"]],[R[4]]]],[11,"deserialize",E,E,3,[[["__d"]],[R[4]]]],[11,"as_static",E,E,3,[[["self"]],["str"]]]],"p":[[3,"DataMgr"],[3,"Crop"],[3,"Plant"],[4,R[19]],[3,"Task"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);