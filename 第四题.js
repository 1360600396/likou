import { ref, watch, onBeforeUnmount } from 'vue';

function useInterval(fn, delay, immediate = false) {
    const timerId = ref(null);
    const startTime = ref(null);
    const elapsedTime = ref(0);
    const isRunning = ref(false); // 添加一个状态用于标记定时器是否已经启动

    const start = () => {
        if (immediate) fn();
        timerId.value = setInterval(() => fn(), delay);
        startTime.value = Date.now();
        isRunning.value = true;
    }

    const stop = () => {
        clearInterval(timerId.value);
        isRunning.value = false;
    }

    const pause = () => {
        clearInterval(timerId.value);
        elapsedTime.value += Date.now() - startTime.value;
        isRunning.value = false;
    }

    const resume = () => {
        if (isRunning.value) return; // 如果定时器已经在运行，则直接返回
        if (elapsedTime.value > 0) {
            timerId.value = setTimeout(() => {
                start();
            }, delay - elapsedTime.value);
        }
    }

    watch(() => fn, {
        immediate: false,
        flush: 'post',
        deep: false
    });

    onBeforeUnmount(() => {
        stop();
    });

    return { start, stop, pause, resume };
}

const { start, stop, pause, resume } = useInterval(() => console.log('foo'), 3000, true);
start();
