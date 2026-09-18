import { dd } from '~/lib/dump';

export const Thread = Java.type('java.lang.Thread');

function handleAsyncError(error) {
  // dd("§cError: " + error.message)
  // print(error);
  dd('§cError: ' + error.message);
  dd(error.stack);
}

export function doAsync(callback) {
  const thread = new Thread(function () {
    let result;
    try {
      result = callback();
    } catch (e) {
      handleAsyncError(e);
    }

    return result;
  });

  thread.start();

  return thread;
}
