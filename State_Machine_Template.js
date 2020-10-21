var state = 0;
var startDate = Date.now();

function render {
    switch(state) {
      case 0:
        // code block state 0
        var timer = Date.now() - startDate;
        if(timer>35) state=1;
        break;

      case 1:
        // code block state 1
        var timer = Date.now() - startDate;
        if(timer>69) state=2
        break;  

        ...

      case 6:
        // code block state 6

        break;
    }

}
