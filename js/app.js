const imgOffset = 50;
const textOffset = 40;
const drag = 8;

document.addEventListener('DOMContentLoaded', (e) => {
  const text = document.querySelector('.Banner .col-md-6');
  const Mountain = document.querySelector('.Banner .Mountain');
  const Cloud2 = document.querySelector('.Banner .Cloud2');
  const Cloud1 = document.querySelector('.Banner .Cloud1');
  const PlayGround = document.querySelector('.Banner .PlayGround');
  const CleanSky = document.querySelector('.Banner .CleanSky');
  const SkiengMan = document.querySelector('.Banner .Man');
  
  // @media (max-width: 575.98px) { ... }

  // @media (max-width: 767.98px) { ... }
  
  // @media (max-width: 991.98px) { ... }
 
  // @media (max-width: 1199.98px) { ... }
  
  // @media (max-width: 1399.98px) { ... }

  window.addEventListener('scroll', (se) => {
    let query = window.matchMedia("(min-width: 1400px)");
    let query1 = window.matchMedia("(max-width: 1399.98px) and (min-width: 1200px)");
    let query2 = window.matchMedia("(max-width: 1199.98px) and (min-width: 992px)");
    let queryiPadPro = window.matchMedia("(min-device-width: 1024px) and (max-device-width: 1366px)");
    let queryiPhone14Pro = window.matchMedia("(min-device-width: 430px) and (max-device-width: 932px)");
    let query3 = window.matchMedia("(max-width: 991.98px) and (min-width: 768px)");
    let query4 = window.matchMedia("(max-width: 767.98px)  and (min-width: 576px)");
    let query5 = window.matchMedia("(max-width: 575.98px)  and (min-width: 415spx)");
    let query6 = window.matchMedia("(max-width: 414px)  and (min-width: 300px)");
    if(query.matches){
      const newOffset = imgOffset - window.scrollY / drag;
      const MountainOffset = 70 - window.scrollY / drag;
      const PlayGroundOffset = 100 - window.scrollY / (drag - 3);
      const ManOffset = 50 - window.scrollY / (drag);
      const ManOffsetLeft = 50 + window.scrollY / (drag);
      if (newOffset < 0) {
          Cloud2.style.bottom = newOffset + 'px';
          Cloud1.style.bottom = newOffset + 'px';
          Mountain.style.bottom=MountainOffset + 'px';
          CleanSky.style.bottom= MountainOffset - 20 + 'px';
          PlayGround.style.bottom= PlayGroundOffset + 'px';
      }
      SkiengMan.style.bottom= ManOffset + 70 + 'px';
      SkiengMan.style.left= ManOffsetLeft + 'px';
  
      const newTextOffset = textOffset - 20 - window.scrollY / (drag - 4);
      text.style.marginTop = newTextOffset + 'px';
    }
    else if(query1.matches){
  
      const ManOffset = 50 - window.scrollY / (drag);
      const ManOffsetLeft = 50 + window.scrollY / (drag);
  
      SkiengMan.style.bottom= ManOffset + 70 + 'px';
      SkiengMan.style.left= ManOffsetLeft + 'px';
  
      const newTextOffset = textOffset - 50 - window.scrollY / (drag - 4);
      text.style.marginTop = newTextOffset - 30 + 'px';
    }else if(query2.matches || queryiPadPro.matches){
   
      const ManOffset = 50 - window.scrollY / (drag);
      const ManOffsetLeft = 50 + window.scrollY / (drag);
   
      SkiengMan.style.bottom= ManOffset + 50 + 'px';
      SkiengMan.style.left= ManOffsetLeft  + 'px';
  
      const newTextOffset = textOffset - 70 - window.scrollY / (drag - 4);
      text.style.marginTop = newTextOffset - 30 + 'px';
    }else if(query3.matches){
 
      const ManOffset = 50 - window.scrollY / (drag);
      const ManOffsetLeft = 50 + window.scrollY / (drag);
   
      SkiengMan.style.bottom= ManOffset + 30 + 'px';
      SkiengMan.style.left= ManOffsetLeft  + 'px';
  
      const newTextOffset = textOffset - 20 - window.scrollY / (drag - 4);
      text.style.marginTop = newTextOffset - 30 + 'px';
    }else if(query4.matches){
   
      const ManOffset = 50 - window.scrollY / (drag);
      const ManOffsetLeft = 50 + window.scrollY / (drag);
   
      SkiengMan.style.bottom= ManOffset  + 'px';
      SkiengMan.style.left= ManOffsetLeft  + 'px';
  
      const newTextOffset = textOffset -20 - window.scrollY / (drag - 4);
      text.style.marginTop = newTextOffset - 30 + 'px';
    }else if(query5.matches || queryiPhone14Pro.matches){
   
      const ManOffset = 50 - window.scrollY / (drag);
      const ManOffsetLeft = 50 + window.scrollY / (drag);
   
      SkiengMan.style.bottom= ManOffset -10 + 'px';
      SkiengMan.style.left= ManOffsetLeft -40 + 'px';
  
      const newTextOffset = textOffset -20 - window.scrollY / (drag - 4);
      text.style.marginTop = newTextOffset - 30 + 'px';
    }else if(query6.matches){
   
      const ManOffset = 50 - window.scrollY / (drag);
      const ManOffsetLeft = 50 + window.scrollY / (drag);
   
      SkiengMan.style.bottom= ManOffset -30 + 'px';
      SkiengMan.style.left= ManOffsetLeft -50 + 'px';
  
      const newTextOffset = textOffset -20 - window.scrollY / (drag - 4);
      text.style.marginTop = newTextOffset - 30 + 'px';
    }

  });
});
