<template>
    <h1>Watchers</h1>
    <div>
        <span ref="recordsSize">No records</span>
    </div>
    <div>
        <button @click="++taskId">Next Task</button>
        <button @click="--taskId">Previous Task</button>
        <div>
            <span>Currently viewed item : {{ taskId }}</span>
            <pre v-if="!record && httpStatus === undefined">No selected item</pre>
            <pre v-else-if="httpStatus === 404 || httpStatus === 500" :id="msgErrId">{{recordNotFoundErrMsg}}</pre>
            <pre v-else>{{ record }}</pre>
        </div>
        <button @click="sendRecordToParent">Send this record to parent component</button>

        <h2>Simplified use of watchers</h2>
        <div>
            <div>
                <b>Item id received from the parent component : {{ idFromParent }}</b>
            </div>
            <span>Currently viewed item : {{ taskId }}</span>
            <pre v-if="!record2">No selected item</pre>
            <pre v-else-if="httpStatus2 === 404 || httpStatus2 === 500" :id="msgErrId">{{recordNotFoundErrMsg}}</pre>
            <pre v-else>{{ record2 }}</pre>
        </div>
    </div>

    <h2>Addition of a Template Fragment using Slots</h2>
    <button @click="toggleSlotFragment = !toggleSlotFragment; console.log(toggleSlotFragment)">Toggle Slot Fragment</button>
    <div>
        <div v-if="toggleSlotFragment">
            <slot>
                No Template Fragment Slot received yet
            </slot>
        </div>
        
        <div v-else>
            No Template Fragment Slot rendered yet
        </div>
    </div>


</template>



<script setup>

    import { ref, watch, onMounted } from 'vue';

    const records = ref (null);
    const recordsSize = ref (0);
    const record = ref (null);
    const record2 = ref (null);
    const taskId = ref (0);
    const recordNotFoundErrMsg = ref(null);
    const msgErrId = ref('');
    const httpStatus = ref(undefined);
    const httpStatus2 = ref(undefined);
    

    const parentProps = defineProps({
        idFromParent: Number
    });
    defineExpose({
        getRecordById2
    });
    const toggleSlotFragment = ref(false);

    const  currentChildRecordEmit= defineEmits(['child-record-sent-to-parent']);

    const getRecords = async () => {
        console.log('Get records...');
        const datas = await fetch(`https://jsonplaceholder.typicode.com/todos`);///${todoId.value}
        // recordsSize.value.textContent = "Number of records : "+records.value.length;*
        records.value = await datas.json();
        return records.value;
    }

    const getRecordById = async (id) => {
        console.log('Get record for id : '+id);
        
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => {
            console.log('Response : '+response);
            console.log('Response status : '+response.status+" <=> "+response.statusText+" <=> "+response.ok);
            
            //Check properties available of response object
            // loopThroughObjectProperty(response);
            
            httpStatus.value = response.status;
            console.log('HTTP STATUS : '+httpStatus.value);
            if(response.ok) {
                response.json().then((r) => {
            
                //    console.log("Record found : "+r);
                //    loopThroughObjectProperty(r);
                    record.value = r;
                    // currentChildRecordEmit("child-record-sent-to-parent", record.value);
                });
            } else {
                msgErrId.value = "msgErr";
                if(response.status === 404) {
                    console.log("No record found for id : "+id)
                    recordNotFoundErrMsg.value = "No record found for id : "+id;
                } else {
                    console.log("Error fetching record for id : "+id);
                    recordNotFoundErrMsg.value = "Error fetching record for id : "+id;
                }  
                record.value = null;
            }

            
        }); 
        
    };

    async function getRecordById2() {
        const parentRecordId = () => parentProps.idFromParent;
        console.log('Get record id from parent component : '+ parentRecordId());

        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${parentRecordId()}`);
        
        httpStatus2.value = response.status;
        console.log('HTTP STATUS 2 : '+httpStatus2.value);
        
        if(response.ok) {
            record2.value = await response.json();
        } else {
            msgErrId.value = "msgErr";
            if(response.status === 404) {
                console.log("No record found for id : "+parentRecordId())
                recordNotFoundErrMsg.value = "No record found for id : "+parentRecordId();
            } else {
                console.log("Error fetching record for id : "+parentRecordId());
                recordNotFoundErrMsg.value = "Error fetching record for id : "+parentRecordId();
            }
        } 
    }

    const loopThroughObjectProperty = (obj) => {
        const objectType = Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1);
        // console.log('Typeof Object : '+obj.constructor+" => "+objectType);
        for(let p in obj) {
            console.log( 'Object of type => '+objectType+' <=> property : '+p);
        }
    };

    const sendRecordToParent = () => {
        console.log(
            'Emitting record to parent component : ', record.value, 
            "For record id  :", taskId.value
        );
        //Returnrfreshed record value to parent component through emits
        currentChildRecordEmit('child-record-sent-to-parent', record.value);
    }

    onMounted(() => {
        console.log('Fetching records...');
        getRecords().then((r) => {
            console.log('Records fetched : '+r.length);
            recordsSize.value.textContent = "Number of records : "+r.length;
        });
    });

    watch(taskId, (taskIdnewVal, taskIdoldVal) => {
        console.log('Watcher taskId : new value : '+taskIdnewVal+" <=> old value : "+taskIdoldVal);
        if(taskIdnewVal <= 0) {
            // /!\ Important : 
            // reset httpStatus and record value to avoid displaying 
            // error message and 
            // record of previous task id when user click on previous button with task id from 1 to 0
            httpStatus.value = undefined;
            record.value = null;

            console.log(
                'TaskId New value is negative reset to 0',
                "HTTP STATUS :", httpStatus.value,
                "RECORD VALUE : ", record.value
            );

            taskId.value = 0;
        } else {
            getRecordById(taskIdnewVal);
        }
        
    });

</script>

<style>
    #msgErr {
        color: red;
        padding: 5px;
        font-weight: 700;
    }
</style>