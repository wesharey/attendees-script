(()=> {
let attendees = ''; [].slice.call(document.querySelectorAll('a[href*="mailto"]')).map((v)=>attendees+=`${v.innerHTML}; `);
let mail = `mailto: 
      ?subject=${escape("[WeShare] Attendees list")}
      &body=${attendees}`;
document.location.href = mail;
})();
