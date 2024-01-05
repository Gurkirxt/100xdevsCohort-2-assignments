let count = 0;
function log_count() {
  count++;
  console.log(count);
}
setInterval(log_count, 1000);
