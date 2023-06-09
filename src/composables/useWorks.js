import { onBeforeMount, ref, watch } from "vue";

export default function () {
  //變數
  const loading = ref(false);
  const data = ref({});
  const sort = ref(false);
  //拉api函式
  const getdata = async () => {
    loading.value = true;
    data.value = {};
    const sortValue = sort.value ? "1" : "0";
    const fetch_response = await fetch(
      `https://2023-engineer-camp.zeabur.app/api/v1/works?sort=${sortValue}`
    );
    const res = await fetch_response.json();
    data.value = res;
    loading.value = false;
  };
  onBeforeMount(getdata);
  watch(sort, getdata);
  return {
    reload: getdata,
    data,
    sort,
    loading,
  };
}
