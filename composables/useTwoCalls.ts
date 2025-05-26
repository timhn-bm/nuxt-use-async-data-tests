import { getData } from "~/fetch";

export function useTwoCalls() {
  const { data: data1, pending: pending1 } = useAsyncData(
    () => {
      return getData("first call", 3000);
    },
    { server: true, lazy: false }
  );

  const { data: data2, pending: pending2 } = useAsyncData(() => {
    return getData("second call", 5000);
  });

  return { data1, data2, pending1, pending2 };
}

export function useTwoCallsWorking() {
  const promise1 = useAsyncData(() => {
    return getData("first call", 3000);
  });

  const promise2 = useAsyncData(() => {
    return getData("second call", 5000);
  });

  const { data: data1, pending: pending1 } = promise1;
  const { data: data2, pending: pending2 } = promise2;

  return { promise1, promise2, data1, data2, pending1, pending2 };
}

export async function useSequentialAsyncDatas() {
  console.log("useSequentialAsyncDatas called");
  const { data: data1, pending: pending1 } = await useAsyncData(() => {
    return getData("first call", 3000);
  });

  console.log("First call completed, proceeding to second call");
  const { data: data2, pending: pending2 } = await useAsyncData(() => {
    return getData("second call", 5000);
  });

  return { data1, data2, pending1, pending2 };
}
