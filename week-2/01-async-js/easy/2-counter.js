let count = 0;

function log_count() {
  count++;
  console.log(count);
  setTimeout(log_count, 1000);
}

log_count();
