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

        <h2>Simplified use of watchers</h2>
        <div>
            <span>Currently viewed item : {{ taskId }}</span>
            <pre v-if="!record2">No selected item</pre>
            <pre v-else>{{ record2 }}</pre>
        </div>
    </div>

</template>



<script setup>

    import { ref, watch, onMounted } from 'vue';

    const records = ref (null);
    const record = ref (null);
    const record2 = ref (null);
    const recordsSize = ref (0);
    const taskId = ref (0);
    const recordNotFoundErrMsg = ref(null);
    const msgErrId = ref('');
    const httpStatus = ref(undefined);

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
            if(response.ok) {
                response.json().then((r) => {
            
                //    console.log("Record found : "+r);
                //    loopThroughObjectProperty(r);
                    record.value = r;
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
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId.value}`);
        record2.value = await response.json();
    }

    const loopThroughObjectProperty = (obj) => {
        const objectType = Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1);
        // console.log('Typeof Object : '+obj.constructor+" => "+objectType);
        for(let p in obj) {
            console.log( 'Object of type => '+objectType+' <=> property : '+p);
        }
    };

    onMounted(() => {
        console.log('Fetching records...');
        getRecords().then((r) => {
            console.log('Records fetched : '+r.length);
            recordsSize.value.textContent = "Number of records : "+r.length;
        });
    });

    watch(taskId, (newVal, oldVal) => {
        console.log('Watcher taskId : new value : '+newVal+" <=> old value : "+oldVal);
        getRecordById(newVal);
        getRecordById2();    });

</script>

<style>
    #msgErr {
        color: red;
        padding: 5px;
        font-weight: 700;
    }
</style>