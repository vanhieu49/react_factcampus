window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const previous = document.querySelector('[aria-label="Previous"]')
    const next = document.querySelector('[aria-label="Next"]')
    const pause = document.querySelector('[aria-label="pause"]')
    const play = document.querySelector('[aria-label="play"]')
    // Add a click event handler to each tab
    tabs.forEach(tab => {
      tab.addEventListener("click", changeTabs);
    });

    next.addEventListener("click", functionNext);

    function functionNext(){
        const ariaSelected = document.querySelector('[aria-selected="true"]');
        let cuidnum =Number(ariaSelected.id.replace('tab-',''));

        ariaSelected.setAttribute("aria-selected", false);
        document.querySelector(`[aria-labelledby="tab-${cuidnum}"]`).classList.remove("ca_active");
 
        cuidnum++;
        if(cuidnum>tabs.length) cuidnum = 1;

        document.getElementById(`tab-${cuidnum}`)
            .setAttribute("aria-selected", true)
        document.querySelector(`[aria-labelledby="tab-${cuidnum}"]`).classList.add("ca_active");
    }

    previous.addEventListener("click", ()=>{
        const ariaSelected = document.querySelector('[aria-selected="true"]');
        let cuidnum =Number(ariaSelected.id.replace('tab-',''));

        ariaSelected.setAttribute("aria-selected", false);
        document.querySelector(`[aria-labelledby="tab-${cuidnum}"]`).classList.remove("ca_active");

        cuidnum--;
        if(cuidnum<1) cuidnum = tabs.length;

        document.getElementById(`tab-${cuidnum}`)
            .setAttribute("aria-selected", true);
        document.querySelector(`[aria-labelledby="tab-${cuidnum}"]`).classList.add("ca_active");
    })
    
    
    let interval = setInterval(()=>{
        functionNext()
    },6000)
    
    play.addEventListener("click", () =>{
        interval = setInterval(()=>{
            functionNext()
        },6000)
        pause.classList.add("active")
        play.classList.remove("active")
    })
    
    pause.addEventListener("click", ()=>{
        clearInterval(interval)
        pause.classList.remove("active")
        play.classList.add("active")
    })
});
  
  
  function changeTabs(e) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
    // Remove all current selected tabs
    parent
        .querySelectorAll('[aria-selected="true"]')
        .forEach(t => t.setAttribute("aria-selected", false));
  
    // Set this tab as selected
    target
        .setAttribute("aria-selected", true);

    grandparent.parentNode.parentNode
        .querySelectorAll('[role="tabpanel"]')
        .forEach(p => p.classList.remove("ca_active"));

    grandparent.parentNode.parentNode
        .querySelector(`#${target.getAttribute("aria-controls")}`)
        .classList.remove("ca_active")

    grandparent.parentNode.parentNode
        .querySelector(`#${target.getAttribute("aria-controls")}`).classList.add("ca_active")
  
  }