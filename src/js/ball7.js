const fieldRef = document.querySelector(".ball7__field");
const ballRef = document.querySelector(".ball7__ball");

fieldRef.onclick = function(event) {
      let fieldCoords = this.getBoundingClientRect();

      let ballCoords = {
        top: event.clientY - fieldCoords.top - fieldRef.clientTop - ballRef.clientHeight / 2,
        left: event.clientX - fieldCoords.left - fieldRef.clientLeft - ballRef.clientWidth / 2,
      };

      if (ballCoords.top < 0) ballCoords.top = 0;
      if (ballCoords.left < 0) ballCoords.left = 0;

      if (ballCoords.left + ballRef.clientWidth > fieldRef.clientWidth) {
        ballCoords.left = fieldRef.clientWidth - ballRef.clientWidth;
      }

      if (ballCoords.top + ballRef.clientHeight > fieldRef.clientHeight) {
        ballCoords.top = fieldRef.clientHeight - ballRef.clientHeight;
      }

      ballRef.style.left = ballCoords.left + 'px';
      ballRef.style.top = ballCoords.top + 'px';
}
