const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDevideinfo(id){
    const $id = d.getElementById(id);

    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone||ipad||ipod/i),
        wndows: () => ua.match(/windows phone/i),
        any: function (){
            return this.android() || this.ios() || this.windows();
        }
    };
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        }

    };

    const isBrowser = {

        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera || opera mini/i),
        ie: () => ua.match(/mseie || iemobile/i),
        edge: () => ua.match(/Edg/i),
        any: function(){
            return (this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge())
        }
    }
 
    /*console.log(ua);
    console.log(isMobile.any())*/

    $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop}</b></li>
    <li>navegador: ${isBrowser.any()}</li>
    </ul>
    `;

    console.log(ua)

    if(isBrowser.chrome){
        $id.innerHTML += `<p>Este contenido solo se ve en Chrome`;
    }


}
