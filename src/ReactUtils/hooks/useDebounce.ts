export default () =>
  <F extends (...args: any) => any>(func: F, waitFor: number) => {
    let timeout: ReturnType<typeof setTimeout>

    const debounced = (...args: any) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), waitFor)
    }

    return debounced as (...args: Parameters<F>) => ReturnType<F>
  }
