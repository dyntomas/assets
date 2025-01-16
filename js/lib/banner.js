/**
 * Banners for website
 * Created for Dyntomas
 * ID options: wip, broken, abandoned
 */

const style=document.createElement("style");const bannerclass="banner";style.textContent=`.${ bannerclass }{position: fixed;left: 0;top: 0;width: 100%;color: white;text-align: center;font-size: 20px;}`;document.head.append(style);const config={"wip":{text:"This project is work in progress and there may be issues",color:"grey"},"broken":{text:"This project is broken and no longer works",color:"orange"},"abandoned":{text:"This project is now abandoned and no longer getting updates",color:"orange"}};function template(id){if(!config[id]){return false}custom(config[id].text,config[id].color)}function custom(message,color,allowHTML=false,onClick=false){const div=document.createElement("div");const p=document.createElement("p");if(allowHTML){p.innerHTML=message}else{p.textContent=message}div.classList.add(bannerclass);div.style["background-color"]=color||"gray";if(onClick!=false){div.addEventListener("click",onClick)}div.append(p);document.body.prepend(div)}window.banner={template,custom};