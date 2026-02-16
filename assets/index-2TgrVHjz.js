(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Xc="182",lm=0,Ku=1,cm=2,Wo=1,um=2,Is=3,Vi=0,vn=1,ii=2,si=0,Gr=1,Qu=2,Ju=3,Zu=4,hm=5,ir=100,fm=101,dm=102,pm=103,mm=104,gm=200,_m=201,vm=202,xm=203,bl=204,wl=205,ym=206,Em=207,Sm=208,Tm=209,Mm=210,Am=211,bm=212,wm=213,Rm=214,Rl=0,Cl=1,Il=2,jr=3,Pl=4,Dl=5,Ll=6,Nl=7,ed=0,Cm=1,Im=2,Hn=0,td=1,nd=2,id=3,rd=4,sd=5,od=6,ad=7,ld=300,hr=301,Yr=302,Ul=303,Fl=304,ma=306,Ol=1e3,ri=1001,Vl=1002,en=1003,Pm=1004,vo=1005,un=1006,Ba=1007,sr=1008,wn=1009,cd=1010,ud=1011,Gs=1012,qc=1013,$n=1014,zn=1015,li=1016,$c=1017,jc=1018,Hs=1020,hd=35902,fd=35899,dd=1021,pd=1022,Ln=1023,ci=1026,or=1027,md=1028,Yc=1029,Kr=1030,Kc=1031,Qc=1033,Xo=33776,qo=33777,$o=33778,jo=33779,Bl=35840,kl=35841,zl=35842,Gl=35843,Hl=36196,Wl=37492,Xl=37496,ql=37488,$l=37489,jl=37490,Yl=37491,Kl=37808,Ql=37809,Jl=37810,Zl=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,oc=37818,ac=37819,lc=37820,cc=37821,uc=36492,hc=36494,fc=36495,dc=36283,pc=36284,mc=36285,gc=36286,Dm=3200,Lm=0,Nm=1,Ri="",An="srgb",Qr="srgb-linear",ta="linear",yt="srgb",Mr=7680,eh=519,Um=512,Fm=513,Om=514,Jc=515,Vm=516,Bm=517,Zc=518,km=519,th=35044,nh="300 es",Gn=2e3,na=2001;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zm(){const i=ia("canvas");return i.style.display="block",i}const ih={};function rh(...i){const e="THREE."+i.shift();console.log(e,...i)}function Xe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function gt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Ws(...i){const e=i.join(" ");e in ih||(ih[e]=!0,Xe(...i))}function Gm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ka=Math.PI/180,_c=180/Math.PI;function Js(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Hm(i,e){return(i%e+e)%e}function za(i,e,t){return(1-t)*i+t*e}function Ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,l){let c=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3],p=s[o+0],v=s[o+1],b=s[o+2],R=s[o+3];if(l<=0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(l>=1){e[t+0]=p,e[t+1]=v,e[t+2]=b,e[t+3]=R;return}if(d!==R||c!==p||u!==v||h!==b){let y=c*p+u*v+h*b+d*R;y<0&&(p=-p,v=-v,b=-b,R=-R,y=-y);let g=1-l;if(y<.9995){const D=Math.acos(y),N=Math.sin(D);g=Math.sin(g*D)/N,l=Math.sin(l*D)/N,c=c*g+p*l,u=u*g+v*l,h=h*g+b*l,d=d*g+R*l}else{c=c*g+p*l,u=u*g+v*l,h=h*g+b*l,d=d*g+R*l;const D=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=D,u*=D,h*=D,d*=D}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const l=n[r],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o],p=s[o+1],v=s[o+2],b=s[o+3];return e[t]=l*b+h*d+c*v-u*p,e[t+1]=c*b+h*p+u*d-l*v,e[t+2]=u*b+h*v+l*p-c*d,e[t+3]=h*b-l*d-c*p-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(n/2),h=l(r/2),d=l(s/2),p=c(n/2),v=c(r/2),b=c(s/2);switch(o){case"XYZ":this._x=p*h*d+u*v*b,this._y=u*v*d-p*h*b,this._z=u*h*b+p*v*d,this._w=u*h*d-p*v*b;break;case"YXZ":this._x=p*h*d+u*v*b,this._y=u*v*d-p*h*b,this._z=u*h*b-p*v*d,this._w=u*h*d+p*v*b;break;case"ZXY":this._x=p*h*d-u*v*b,this._y=u*v*d+p*h*b,this._z=u*h*b+p*v*d,this._w=u*h*d-p*v*b;break;case"ZYX":this._x=p*h*d-u*v*b,this._y=u*v*d+p*h*b,this._z=u*h*b-p*v*d,this._w=u*h*d+p*v*b;break;case"YZX":this._x=p*h*d+u*v*b,this._y=u*v*d+p*h*b,this._z=u*h*b-p*v*d,this._w=u*h*d-p*v*b;break;case"XZY":this._x=p*h*d-u*v*b,this._y=u*v*d-p*h*b,this._z=u*h*b+p*v*d,this._w=u*h*d+p*v*b;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],l=t[5],c=t[9],u=t[2],h=t[6],d=t[10],p=n+l+d;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(h-c)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(n>l&&n>d){const v=2*Math.sqrt(1+n-l-d);this._w=(h-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(l>d){const v=2*Math.sqrt(1+l-n-d);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+h)/v}else{const v=2*Math.sqrt(1+d-n-l);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(c+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+r*u-s*c,this._y=r*h+o*c+s*l-n*u,this._z=s*h+o*u+n*c-r*l,this._w=o*h-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,o=-o,l=-l);let c=1-t;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*r-l*n),h=2*(l*t-s*r),d=2*(s*n-o*t);return this.x=t+c*u+o*d-l*h,this.y=n+c*h+l*u-s*d,this.z=r+c*d+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*o-n*c,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new X,sh=new Zs;class Qe{constructor(e,t,n,r,s,o,l,c,u){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,c,u)}set(e,t,n,r,s,o,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],h=n[4],d=n[7],p=n[2],v=n[5],b=n[8],R=r[0],y=r[3],g=r[6],D=r[1],N=r[4],L=r[7],U=r[2],F=r[5],S=r[8];return s[0]=o*R+l*D+c*U,s[3]=o*y+l*N+c*F,s[6]=o*g+l*L+c*S,s[1]=u*R+h*D+d*U,s[4]=u*y+h*N+d*F,s[7]=u*g+h*L+d*S,s[2]=p*R+v*D+b*U,s[5]=p*y+v*N+b*F,s[8]=p*g+v*L+b*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*s*h+n*l*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=h*o-l*u,p=l*c-h*s,v=u*s-o*c,b=t*d+n*p+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=d*R,e[1]=(r*u-h*n)*R,e[2]=(l*n-r*o)*R,e[3]=p*R,e[4]=(h*t-r*c)*R,e[5]=(r*s-l*t)*R,e[6]=v*R,e[7]=(n*c-u*t)*R,e[8]=(o*t-n*s)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*l)+o+e,-r*u,r*c,-r*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Qe,oh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){const i={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qr]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const ft=Wm();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ar;class Xm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=ia("canvas")),Ar.width=e.width,Ar.height=e.height;const r=Ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qm=0;class eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Wa(r[o].image)):s.push(Wa(r[o]))}else s=Wa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let $m=0;const Xa=new X;class mn extends ss{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=ri,r=ri,s=un,o=sr,l=Ln,c=wn,u=mn.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Js(),this.name="",this.source=new eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ol:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ol:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ld;mn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],h=c[4],d=c[8],p=c[1],v=c[5],b=c[9],R=c[2],y=c[6],g=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+R)<.1&&Math.abs(b+y)<.1&&Math.abs(u+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(u+1)/2,L=(v+1)/2,U=(g+1)/2,F=(h+p)/4,S=(d+R)/4,M=(b+y)/4;return N>L&&N>U?N<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(N),r=F/n,s=S/n):L>U?L<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(L),n=F/r,s=M/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=S/s,r=M/s),this.set(n,r,s,t),this}let D=Math.sqrt((y-b)*(y-b)+(d-R)*(d-R)+(p-h)*(p-h));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(d-R)/D,this.z=(p-h)/D,this.w=Math.acos((u+v+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jm extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new mn(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new eu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends jm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _d extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ym extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),yo.subVectors(this.max,Ts),br.subVectors(e.a,Ts),wr.subVectors(e.b,Ts),Rr.subVectors(e.c,Ts),Si.subVectors(wr,br),Ti.subVectors(Rr,wr),Yi.subVectors(br,Rr);let t=[0,-Si.z,Si.y,0,-Ti.z,Ti.y,0,-Yi.z,Yi.y,Si.z,0,-Si.x,Ti.z,0,-Ti.x,Yi.z,0,-Yi.x,-Si.y,Si.x,0,-Ti.y,Ti.x,0,-Yi.y,Yi.x,0];return!qa(t,br,wr,Rr,yo)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,br,wr,Rr,yo))?!1:(Eo.crossVectors(Si,Ti),t=[Eo.x,Eo.y,Eo.z],qa(t,br,wr,Rr,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new X,new X,new X,new X,new X,new X,new X,new X],Cn=new X,xo=new eo,br=new X,wr=new X,Rr=new X,Si=new X,Ti=new X,Yi=new X,Ts=new X,yo=new X,Eo=new X,Ki=new X;function qa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ki.fromArray(i,s);const l=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),c=e.dot(Ki),u=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Km=new eo,Ms=new X,$a=new X;class tu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Km.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ms,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add($a)),this.expandByPoint(Ms.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new X,ja=new X,So=new X,Mi=new X,Ya=new X,To=new X,Ka=new X;class Qm{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ja.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(So),l=Mi.dot(this.direction),c=-Mi.dot(So),u=Mi.lengthSq(),h=Math.abs(1-o*o);let d,p,v,b;if(h>0)if(d=o*c-l,p=o*l-c,b=s*h,d>=0)if(p>=-b)if(p<=b){const R=1/h;d*=R,p*=R,v=d*(d+o*p+2*l)+p*(o*d+p+2*c)+u}else p=s,d=Math.max(0,-(o*p+l)),v=-d*d+p*(p+2*c)+u;else p=-s,d=Math.max(0,-(o*p+l)),v=-d*d+p*(p+2*c)+u;else p<=-b?(d=Math.max(0,-(-o*s+l)),p=d>0?-s:Math.min(Math.max(-s,-c),s),v=-d*d+p*(p+2*c)+u):p<=b?(d=0,p=Math.min(Math.max(-s,-c),s),v=p*(p+2*c)+u):(d=Math.max(0,-(o*s+l)),p=d>0?s:Math.min(Math.max(-s,-c),s),v=-d*d+p*(p+2*c)+u);else p=o>0?-s:s,d=Math.max(0,-(o*p+l)),v=-d*d+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ja).addScaledVector(So,p),v}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),r=Zn.dot(Zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,l,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return u>=0?(n=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(n=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(l=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(l=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,r,s){Ya.subVectors(t,e),To.subVectors(n,e),Ka.crossVectors(Ya,To);let o=this.direction.dot(Ka),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const c=l*this.direction.dot(To.crossVectors(Mi,To));if(c<0)return null;const u=l*this.direction.dot(Ya.cross(Mi));if(u<0||c+u>o)return null;const h=-l*Mi.dot(Ka);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,n,r,s,o,l,c,u,h,d,p,v,b,R,y){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,c,u,h,d,p,v,b,R,y)}set(e,t,n,r,s,o,l,c,u,h,d,p,v,b,R,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=l,g[13]=c,g[2]=u,g[6]=h,g[10]=d,g[14]=p,g[3]=v,g[7]=b,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*h,v=o*d,b=l*h,R=l*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=v+b*u,t[5]=p-R*u,t[9]=-l*c,t[2]=R-p*u,t[6]=b+v*u,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,v=c*d,b=u*h,R=u*d;t[0]=p+R*l,t[4]=b*l-v,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=v*l-b,t[6]=R+p*l,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,v=c*d,b=u*h,R=u*d;t[0]=p-R*l,t[4]=-o*d,t[8]=b+v*l,t[1]=v+b*l,t[5]=o*h,t[9]=R-p*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,v=o*d,b=l*h,R=l*d;t[0]=c*h,t[4]=b*u-v,t[8]=p*u+R,t[1]=c*d,t[5]=R*u+p,t[9]=v*u-b,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,v=o*u,b=l*c,R=l*u;t[0]=c*h,t[4]=R-p*d,t[8]=b*d+v,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=v*d+b,t[10]=p-R*d}else if(e.order==="XZY"){const p=o*c,v=o*u,b=l*c,R=l*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=p*d+R,t[5]=o*h,t[9]=v*d-b,t[2]=b*d-v,t[6]=l*h,t[10]=R*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Zm)}lookAt(e,t,n){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ai.crossVectors(n,yn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ai.crossVectors(n,yn)),Ai.normalize(),Mo.crossVectors(yn,Ai),r[0]=Ai.x,r[4]=Mo.x,r[8]=yn.x,r[1]=Ai.y,r[5]=Mo.y,r[9]=yn.y,r[2]=Ai.z,r[6]=Mo.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],h=n[1],d=n[5],p=n[9],v=n[13],b=n[2],R=n[6],y=n[10],g=n[14],D=n[3],N=n[7],L=n[11],U=n[15],F=r[0],S=r[4],M=r[8],m=r[12],x=r[1],T=r[5],I=r[9],A=r[13],Y=r[2],K=r[6],Q=r[10],q=r[14],ie=r[3],xe=r[7],_e=r[11],Ee=r[15];return s[0]=o*F+l*x+c*Y+u*ie,s[4]=o*S+l*T+c*K+u*xe,s[8]=o*M+l*I+c*Q+u*_e,s[12]=o*m+l*A+c*q+u*Ee,s[1]=h*F+d*x+p*Y+v*ie,s[5]=h*S+d*T+p*K+v*xe,s[9]=h*M+d*I+p*Q+v*_e,s[13]=h*m+d*A+p*q+v*Ee,s[2]=b*F+R*x+y*Y+g*ie,s[6]=b*S+R*T+y*K+g*xe,s[10]=b*M+R*I+y*Q+g*_e,s[14]=b*m+R*A+y*q+g*Ee,s[3]=D*F+N*x+L*Y+U*ie,s[7]=D*S+N*T+L*K+U*xe,s[11]=D*M+N*I+L*Q+U*_e,s[15]=D*m+N*A+L*q+U*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],h=e[2],d=e[6],p=e[10],v=e[14],b=e[3],R=e[7],y=e[11],g=e[15],D=c*v-u*p,N=l*v-u*d,L=l*p-c*d,U=o*v-u*h,F=o*p-c*h,S=o*d-l*h;return t*(R*D-y*N+g*L)-n*(b*D-y*U+g*F)+r*(b*N-R*U+g*S)-s*(b*L-R*F+y*S)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=e[9],p=e[10],v=e[11],b=e[12],R=e[13],y=e[14],g=e[15],D=d*y*u-R*p*u+R*c*v-l*y*v-d*c*g+l*p*g,N=b*p*u-h*y*u-b*c*v+o*y*v+h*c*g-o*p*g,L=h*R*u-b*d*u+b*l*v-o*R*v-h*l*g+o*d*g,U=b*d*c-h*R*c-b*l*p+o*R*p+h*l*y-o*d*y,F=t*D+n*N+r*L+s*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/F;return e[0]=D*S,e[1]=(R*p*s-d*y*s-R*r*v+n*y*v+d*r*g-n*p*g)*S,e[2]=(l*y*s-R*c*s+R*r*u-n*y*u-l*r*g+n*c*g)*S,e[3]=(d*c*s-l*p*s-d*r*u+n*p*u+l*r*v-n*c*v)*S,e[4]=N*S,e[5]=(h*y*s-b*p*s+b*r*v-t*y*v-h*r*g+t*p*g)*S,e[6]=(b*c*s-o*y*s-b*r*u+t*y*u+o*r*g-t*c*g)*S,e[7]=(o*p*s-h*c*s+h*r*u-t*p*u-o*r*v+t*c*v)*S,e[8]=L*S,e[9]=(b*d*s-h*R*s-b*n*v+t*R*v+h*n*g-t*d*g)*S,e[10]=(o*R*s-b*l*s+b*n*u-t*R*u-o*n*g+t*l*g)*S,e[11]=(h*l*s-o*d*s-h*n*u+t*d*u+o*n*v-t*l*v)*S,e[12]=U*S,e[13]=(h*R*r-b*d*r+b*n*p-t*R*p-h*n*y+t*d*y)*S,e[14]=(b*l*r-o*R*r-b*n*c+t*R*c+o*n*y-t*l*y)*S,e[15]=(o*d*r-h*l*r+h*n*c-t*d*c-o*n*p+t*l*p)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,l=e.y,c=e.z,u=s*o,h=s*l;return this.set(u*o+n,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+n,h*c-r*o,0,u*c-r*l,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,l=t._z,c=t._w,u=s+s,h=o+o,d=l+l,p=s*u,v=s*h,b=s*d,R=o*h,y=o*d,g=l*d,D=c*u,N=c*h,L=c*d,U=n.x,F=n.y,S=n.z;return r[0]=(1-(R+g))*U,r[1]=(v+L)*U,r[2]=(b-N)*U,r[3]=0,r[4]=(v-L)*F,r[5]=(1-(p+g))*F,r[6]=(y+D)*F,r[7]=0,r[8]=(b+N)*S,r[9]=(y-D)*S,r[10]=(1-(p+R))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),l=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),In.copy(this);const u=1/s,h=1/o,d=1/l;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,o,l=Gn,c=!1){const u=this.elements,h=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),v=(n+r)/(n-r);let b,R;if(c)b=s/(o-s),R=o*s/(o-s);else if(l===Gn)b=-(o+s)/(o-s),R=-2*o*s/(o-s);else if(l===na)b=-o/(o-s),R=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=d,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=R,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,l=Gn,c=!1){const u=this.elements,h=2/(t-e),d=2/(n-r),p=-(t+e)/(t-e),v=-(n+r)/(n-r);let b,R;if(c)b=1/(o-s),R=o/(o-s);else if(l===Gn)b=-2/(o-s),R=-(o+s)/(o-s);else if(l===na)b=-1/(o-s),R=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=d,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=b,u[14]=R,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new X,In=new Gt,Jm=new X(0,0,0),Zm=new X(1,1,1),Ai=new X,Mo=new X,yn=new X,lh=new Gt,ch=new Zs;class ui{constructor(e=0,t=0,n=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],h=r[9],d=r[2],p=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,v),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eg=0;const uh=new X,Ir=new Zs,ei=new Gt,Ao=new X,As=new X,tg=new X,ng=new Zs,hh=new X(1,0,0),fh=new X(0,1,0),dh=new X(0,0,1),ph={type:"added"},ig={type:"removed"},Pr={type:"childadded",child:null},Qa={type:"childremoved",child:null};class Sn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new X,t=new ui,n=new Zs,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Qe}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(As,Ao,this.up):ei.lookAt(Ao,As,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(ei),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ig),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),v=o(e.animations),b=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=r,n;function o(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new X(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new X,ti=new X,Ja=new X,ni=new X,Dr=new X,Lr=new X,mh=new X,Za=new X,el=new X,tl=new X,nl=new Nt,il=new Nt,rl=new Nt;class Dn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),ti.subVectors(n,t),Ja.subVectors(e,t);const o=Pn.dot(Pn),l=Pn.dot(ti),c=Pn.dot(Ja),u=ti.dot(ti),h=ti.dot(Ja),d=o*u-l*l;if(d===0)return s.set(0,0,0),null;const p=1/d,v=(u*c-l*h)*p,b=(o*h-l*c)*p;return s.set(1-v-b,b,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,r,s,o,l,c){return this.getBarycoord(e,t,n,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(l,ni.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return nl.setScalar(0),il.setScalar(0),rl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nl,s.x),o.addScaledVector(il,s.y),o.addScaledVector(rl,s.z),o}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),ti.subVectors(e,t),Pn.cross(ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,l;Dr.subVectors(r,n),Lr.subVectors(s,n),Za.subVectors(e,n);const c=Dr.dot(Za),u=Lr.dot(Za);if(c<=0&&u<=0)return t.copy(n);el.subVectors(e,r);const h=Dr.dot(el),d=Lr.dot(el);if(h>=0&&d<=h)return t.copy(r);const p=c*d-h*u;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Dr,o);tl.subVectors(e,s);const v=Dr.dot(tl),b=Lr.dot(tl);if(b>=0&&v<=b)return t.copy(s);const R=v*u-c*b;if(R<=0&&u>=0&&b<=0)return l=u/(u-b),t.copy(n).addScaledVector(Lr,l);const y=h*b-v*d;if(y<=0&&d-h>=0&&v-b>=0)return mh.subVectors(s,r),l=(d-h)/(d-h+(v-b)),t.copy(r).addScaledVector(mh,l);const g=1/(y+R+p);return o=R*g,l=p*g,t.copy(n).addScaledVector(Dr,o).addScaledVector(Lr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function sl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=Hm(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sl(o,s,e+1/3),this.g=sl(o,s,e),this.b=sl(o,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,t=An){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return ft.workingToColorSpace(on.copy(this),e),Math.round(rt(on.r*255,0,255))*65536+Math.round(rt(on.g*255,0,255))*256+Math.round(rt(on.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(on.copy(this),t);const n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let c,u;const h=(l+o)/2;if(l===o)c=0,u=0;else{const d=o-l;switch(u=h<=.5?d/(o+l):d/(2-o-l),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=An){ft.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,r=on.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(bo);const n=za(bi.h,bo.h,t),r=za(bi.s,bo.s,t),s=za(bi.l,bo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Et;Et.NAMES=xd;let rg=0;class ga extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Gr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=wl,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yd extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new X,wo=new At;let sg=0;class Xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=th,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}}class Ed extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sd extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ai extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let og=0;const Mn=new Gt,ol=new Sn,Nr=new X,En=new eo,bs=new eo,Kt=new X;class pi extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Sd:Ed)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];bs.setFromBufferAttribute(l),this.morphTargetsRelative?(Kt.addVectors(En.min,bs.min),En.expandByPoint(Kt),Kt.addVectors(En.max,bs.max),En.expandByPoint(Kt)):(En.expandByPoint(bs.min),En.expandByPoint(bs.max))}En.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Kt.fromBufferAttribute(l,u),c&&(Nr.fromBufferAttribute(e,u),Kt.add(Nr)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let M=0;M<n.count;M++)l[M]=new X,c[M]=new X;const u=new X,h=new X,d=new X,p=new At,v=new At,b=new At,R=new X,y=new X;function g(M,m,x){u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,m),d.fromBufferAttribute(n,x),p.fromBufferAttribute(s,M),v.fromBufferAttribute(s,m),b.fromBufferAttribute(s,x),h.sub(u),d.sub(u),v.sub(p),b.sub(p);const T=1/(v.x*b.y-b.x*v.y);isFinite(T)&&(R.copy(h).multiplyScalar(b.y).addScaledVector(d,-v.y).multiplyScalar(T),y.copy(d).multiplyScalar(v.x).addScaledVector(h,-b.x).multiplyScalar(T),l[M].add(R),l[m].add(R),l[x].add(R),c[M].add(y),c[m].add(y),c[x].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let M=0,m=D.length;M<m;++M){const x=D[M],T=x.start,I=x.count;for(let A=T,Y=T+I;A<Y;A+=3)g(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const N=new X,L=new X,U=new X,F=new X;function S(M){U.fromBufferAttribute(r,M),F.copy(U);const m=l[M];N.copy(m),N.sub(U.multiplyScalar(U.dot(m))).normalize(),L.crossVectors(F,m);const T=L.dot(c[M])<0?-1:1;o.setXYZW(M,N.x,N.y,N.z,T)}for(let M=0,m=D.length;M<m;++M){const x=D[M],T=x.start,I=x.count;for(let A=T,Y=T+I;A<Y;A+=3)S(e.getX(A+0)),S(e.getX(A+1)),S(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,v=n.count;p<v;p++)n.setXYZ(p,0,0,0);const r=new X,s=new X,o=new X,l=new X,c=new X,u=new X,h=new X,d=new X;if(e)for(let p=0,v=e.count;p<v;p+=3){const b=e.getX(p+0),R=e.getX(p+1),y=e.getX(p+2);r.fromBufferAttribute(t,b),s.fromBufferAttribute(t,R),o.fromBufferAttribute(t,y),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),l.add(h),c.add(h),u.add(h),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(R,c.x,c.y,c.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let p=0,v=t.count;p<v;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,d=l.normalized,p=new u.constructor(c.length*h);let v=0,b=0;for(let R=0,y=c.length;R<y;R++){l.isInterleavedBufferAttribute?v=c[R]*l.data.stride+l.offset:v=c[R]*h;for(let g=0;g<h;g++)p[b++]=u[v++]}return new Xn(p,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,d=u.length;h<d;h++){const p=u[h],v=e(p,n);c.push(v)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,p=u.length;d<p;d++){const v=u[d];h.push(v.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let p=0,v=d.length;p<v;p++)h.push(d[p].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new Gt,Qi=new Qm,Ro=new tu,_h=new X,Co=new X,Io=new X,Po=new X,al=new X,Do=new X,vh=new X,Lo=new X;class hi extends Sn{constructor(e=new pi,t=new yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Do.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],d=s[c];h!==0&&(al.fromBufferAttribute(d,e),o?Do.addScaledVector(al,h):Do.addScaledVector(al.sub(t),h))}t.add(Do)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(Ro.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ro,_h)===null||Qi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,v=s.drawRange;if(l!==null)if(Array.isArray(o))for(let b=0,R=p.length;b<R;b++){const y=p[b],g=o[y.materialIndex],D=Math.max(y.start,v.start),N=Math.min(l.count,Math.min(y.start+y.count,v.start+v.count));for(let L=D,U=N;L<U;L+=3){const F=l.getX(L),S=l.getX(L+1),M=l.getX(L+2);r=No(this,g,e,n,u,h,d,F,S,M),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),R=Math.min(l.count,v.start+v.count);for(let y=b,g=R;y<g;y+=3){const D=l.getX(y),N=l.getX(y+1),L=l.getX(y+2);r=No(this,o,e,n,u,h,d,D,N,L),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let b=0,R=p.length;b<R;b++){const y=p[b],g=o[y.materialIndex],D=Math.max(y.start,v.start),N=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let L=D,U=N;L<U;L+=3){const F=L,S=L+1,M=L+2;r=No(this,g,e,n,u,h,d,F,S,M),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),R=Math.min(c.count,v.start+v.count);for(let y=b,g=R;y<g;y+=3){const D=y,N=y+1,L=y+2;r=No(this,o,e,n,u,h,d,D,N,L),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function ag(i,e,t,n,r,s,o,l){let c;if(e.side===vn?c=n.intersectTriangle(o,s,r,!0,l):c=n.intersectTriangle(r,s,o,e.side===Vi,l),c===null)return null;Lo.copy(l),Lo.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Lo);return u<t.near||u>t.far?null:{distance:u,point:Lo.clone(),object:i}}function No(i,e,t,n,r,s,o,l,c,u){i.getVertexPosition(l,Co),i.getVertexPosition(c,Io),i.getVertexPosition(u,Po);const h=ag(i,e,t,n,Co,Io,Po,vh);if(h){const d=new X;Dn.getBarycoord(vh,Co,Io,Po,d),r&&(h.uv=Dn.getInterpolatedAttribute(r,l,c,u,d,new At)),s&&(h.uv1=Dn.getInterpolatedAttribute(s,l,c,u,d,new At)),o&&(h.normal=Dn.getInterpolatedAttribute(o,l,c,u,d,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new X,materialIndex:0};Dn.getNormal(Co,Io,Po,p.normal),h.face=p,h.barycoord=d}return h}class to extends pi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],d=[];let p=0,v=0;b("z","y","x",-1,-1,n,t,e,o,s,0),b("z","y","x",1,-1,n,t,-e,o,s,1),b("x","z","y",1,1,e,n,t,r,o,2),b("x","z","y",1,-1,e,n,-t,r,o,3),b("x","y","z",1,-1,e,t,n,r,s,4),b("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ai(u,3)),this.setAttribute("normal",new ai(h,3)),this.setAttribute("uv",new ai(d,2));function b(R,y,g,D,N,L,U,F,S,M,m){const x=L/S,T=U/M,I=L/2,A=U/2,Y=F/2,K=S+1,Q=M+1;let q=0,ie=0;const xe=new X;for(let _e=0;_e<Q;_e++){const Ee=_e*T-A;for(let Ke=0;Ke<K;Ke++){const Ye=Ke*x-I;xe[R]=Ye*D,xe[y]=Ee*N,xe[g]=Y,u.push(xe.x,xe.y,xe.z),xe[R]=0,xe[y]=0,xe[g]=F>0?1:-1,h.push(xe.x,xe.y,xe.z),d.push(Ke/S),d.push(1-_e/M),q+=1}}for(let _e=0;_e<M;_e++)for(let Ee=0;Ee<S;Ee++){const Ke=p+Ee+K*_e,Ye=p+Ee+K*(_e+1),St=p+(Ee+1)+K*(_e+1),vt=p+(Ee+1)+K*_e;c.push(Ke,Ye,vt),c.push(Ye,St,vt),ie+=6}l.addGroup(v,ie,m),v+=ie,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=Jr(i[t]);for(const r in n)e[r]=n[r]}return e}function lg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Td(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const cg={clone:Jr,merge:dn};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Md extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new X,xh=new At,yh=new At;class bn extends Md{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,yh),t.subVectors(yh,xh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Fr=1;class fg extends Sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Ur,Fr,e,t);r.layers=this.layers,this.add(r);const s=new bn(Ur,Fr,e,t);s.layers=this.layers,this.add(s);const o=new bn(Ur,Fr,e,t);o.layers=this.layers,this.add(o);const l=new bn(Ur,Fr,e,t);l.layers=this.layers,this.add(l);const c=new bn(Ur,Fr,e,t);c.layers=this.layers,this.add(c);const u=new bn(Ur,Fr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,l,c]=t;for(const u of t)this.remove(u);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,p,v),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Ad extends mn{constructor(e=[],t=hr,n,r,s,o,l,c,u,h){super(e,t,n,r,s,o,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bd extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ad(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:si});s.uniforms.tEquirect.value=t;const o=new hi(r,s),l=t.minFilter;return t.minFilter===sr&&(t.minFilter=un),new fg(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Uo extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,n),g=this._getHandJoint(u,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],p=h.position.distanceTo(d.position),v=.02,b=.005;u.inputState.pinching&&p>v+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=v-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Uo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pg extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mg extends mn{constructor(e=null,t=1,n=1,r,s,o,l,c,u=en,h=en,d,p){super(null,o,l,c,u,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cl=new X,gg=new X,_g=new Qe;class tr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=cl.subVectors(n,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_g.getNormalMatrix(e),r=this.coplanarPoint(cl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new tu,vg=new At(.5,.5),Fo=new X;class wd{constructor(e=new tr,t=new tr,n=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const r=this.planes,s=e.elements,o=s[0],l=s[1],c=s[2],u=s[3],h=s[4],d=s[5],p=s[6],v=s[7],b=s[8],R=s[9],y=s[10],g=s[11],D=s[12],N=s[13],L=s[14],U=s[15];if(r[0].setComponents(u-o,v-h,g-b,U-D).normalize(),r[1].setComponents(u+o,v+h,g+b,U+D).normalize(),r[2].setComponents(u+l,v+d,g+R,U+N).normalize(),r[3].setComponents(u-l,v-d,g-R,U-N).normalize(),n)r[4].setComponents(c,p,y,L).normalize(),r[5].setComponents(u-c,v-p,g-y,U-L).normalize();else if(r[4].setComponents(u-c,v-p,g-y,U-L).normalize(),t===Gn)r[5].setComponents(u+c,v+p,g+y,U+L).normalize();else if(t===na)r[5].setComponents(c,p,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=vg.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xs extends mn{constructor(e,t,n=$n,r,s,o,l=en,c=en,u,h=ci,d=1){if(h!==ci&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,o,l,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xg extends Xs{constructor(e,t=$n,n=hr,r,s,o=en,l=en,c,u=ci){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,l,c,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rd extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a extends pi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(n),c=Math.floor(r),u=l+1,h=c+1,d=e/l,p=t/c,v=[],b=[],R=[],y=[];for(let g=0;g<h;g++){const D=g*p-o;for(let N=0;N<u;N++){const L=N*d-s;b.push(L,-D,0),R.push(0,0,1),y.push(N/l),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let D=0;D<l;D++){const N=D+u*g,L=D+u*(g+1),U=D+1+u*(g+1),F=D+1+u*g;v.push(N,L,F),v.push(L,U,F)}this.setIndex(v),this.setAttribute("position",new ai(b,3)),this.setAttribute("normal",new ai(R,3)),this.setAttribute("uv",new ai(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}class yg extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Eg extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sg extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cd extends Md{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tg extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Eh(i,e,t,n){const r=Mg(n);switch(t){case dd:return i*e;case md:return i*e/r.components*r.byteLength;case Yc:return i*e/r.components*r.byteLength;case Kr:return i*e*2/r.components*r.byteLength;case Kc:return i*e*2/r.components*r.byteLength;case pd:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case Qc:return i*e*4/r.components*r.byteLength;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case Bl:case zl:return Math.max(i,8)*Math.max(e,8)/2;case Hl:case Wl:case ql:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xl:case jl:case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uc:case hc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mg(i){switch(i){case wn:case cd:return{byteLength:1,components:1};case Gs:case ud:case li:return{byteLength:2,components:1};case $c:case jc:return{byteLength:2,components:4};case $n:case qc:case zn:return{byteLength:4,components:1};case hd:case fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);function Id(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ag(i){const e=new WeakMap;function t(l,c){const u=l.array,h=l.usage,d=u.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,h),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,u){const h=c.array,d=c.updateRanges;if(i.bindBuffer(u,l),d.length===0)i.bufferSubData(u,0,h);else{d.sort((v,b)=>v.start-b.start);let p=0;for(let v=1;v<d.length;v++){const b=d[p],R=d[v];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++p,d[p]=R)}d.length=p+1;for(let v=0,b=d.length;v<b;v++){const R=d[v];i.bufferSubData(u,R.start*h.BYTES_PER_ELEMENT,h,R.start,R.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:o}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,D0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:bg,alphahash_pars_fragment:wg,alphamap_fragment:Rg,alphamap_pars_fragment:Cg,alphatest_fragment:Ig,alphatest_pars_fragment:Pg,aomap_fragment:Dg,aomap_pars_fragment:Lg,batching_pars_vertex:Ng,batching_vertex:Ug,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:Vg,iridescence_fragment:Bg,bumpmap_pars_fragment:kg,clipping_planes_fragment:zg,clipping_planes_pars_fragment:Gg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:qg,color_pars_vertex:$g,color_vertex:jg,common:Yg,cube_uv_reflection_fragment:Kg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Zg,emissivemap_fragment:e_,emissivemap_pars_fragment:t_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:r_,envmap_common_pars_fragment:s_,envmap_pars_fragment:o_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:v_,envmap_vertex:l_,fog_vertex:c_,fog_pars_vertex:u_,fog_fragment:h_,fog_pars_fragment:f_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:x_,lights_toon_pars_fragment:y_,lights_phong_fragment:E_,lights_phong_pars_fragment:S_,lights_physical_fragment:T_,lights_physical_pars_fragment:M_,lights_fragment_begin:A_,lights_fragment_maps:b_,lights_fragment_end:w_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:P_,map_fragment:D_,map_pars_fragment:L_,map_particle_fragment:N_,map_particle_pars_fragment:U_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:O_,morphinstance_vertex:V_,morphcolor_vertex:B_,morphnormal_vertex:k_,morphtarget_pars_vertex:z_,morphtarget_vertex:G_,normal_fragment_begin:H_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:q_,normal_vertex:$_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:J_,opaque_fragment:Z_,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:r0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:u0,skinbase_vertex:h0,skinning_pars_vertex:f0,skinning_vertex:d0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:y0,uv_pars_fragment:E0,uv_pars_vertex:S0,uv_vertex:T0,worldpos_vertex:M0,background_vert:A0,background_frag:b0,backgroundCube_vert:w0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:I0,depth_vert:P0,depth_frag:D0,distance_vert:L0,distance_frag:N0,equirect_vert:U0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:V0,meshbasic_vert:B0,meshbasic_frag:k0,meshlambert_vert:z0,meshlambert_frag:G0,meshmatcap_vert:H0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:$0,meshphong_frag:j0,meshphysical_vert:Y0,meshphysical_frag:K0,meshtoon_vert:Q0,meshtoon_frag:J0,points_vert:Z0,points_frag:ev,shadow_vert:tv,shadow_frag:nv,sprite_vert:iv,sprite_frag:rv},ye={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Vn={basic:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:dn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:dn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:dn([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:dn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:dn([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:dn([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:dn([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:dn([ye.lights,ye.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Vn.physical={uniforms:dn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Oo={r:0,b:0,g:0},Zi=new ui,sv=new Gt;function ov(i,e,t,n,r,s,o){const l=new Et(0);let c=s===!0?0:1,u,h,d=null,p=0,v=null;function b(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?t:e).get(L)),L}function R(N){let L=!1;const U=b(N);U===null?g(l,c):U&&U.isColor&&(g(U,1),L=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(N,L){const U=b(L);U&&(U.isCubeTexture||U.mapping===ma)?(h===void 0&&(h=new hi(new to(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Jr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Zi.copy(L.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Zi)),h.material.toneMapped=ft.getTransfer(U.colorSpace)!==yt,(d!==U||p!==U.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,d=U,p=U.version,v=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(u===void 0&&(u=new hi(new _a(2,2),new jn({name:"BackgroundMaterial",uniforms:Jr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=U,u.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,u.material.toneMapped=ft.getTransfer(U.colorSpace)!==yt,U.matrixAutoUpdate===!0&&U.updateMatrix(),u.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||p!==U.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,d=U,p=U.version,v=i.toneMapping),u.layers.enableAll(),N.unshift(u,u.geometry,u.material,0,0,null))}function g(N,L){N.getRGB(Oo,Td(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,L,o)}function D(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(N,L=1){l.set(N),c=L,g(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(N){c=N,g(l,c)},render:R,addToRenderList:y,dispose:D}}function av(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function l(x,T,I,A,Y){let K=!1;const Q=d(A,I,T);s!==Q&&(s=Q,u(s.object)),K=v(x,A,I,Y),K&&b(x,A,I,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,L(x,T,I,A),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,T,I){const A=I.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let K=Y[T.id];K===void 0&&(K={},Y[T.id]=K);let Q=K[A];return Q===void 0&&(Q=p(c()),K[A]=Q),Q}function p(x){const T=[],I=[],A=[];for(let Y=0;Y<t;Y++)T[Y]=0,I[Y]=0,A[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:A,object:x,attributes:{},index:null}}function v(x,T,I,A){const Y=s.attributes,K=T.attributes;let Q=0;const q=I.getAttributes();for(const ie in q)if(q[ie].location>=0){const _e=Y[ie];let Ee=K[ie];if(Ee===void 0&&(ie==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),ie==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),_e===void 0||_e.attribute!==Ee||Ee&&_e.data!==Ee.data)return!0;Q++}return s.attributesNum!==Q||s.index!==A}function b(x,T,I,A){const Y={},K=T.attributes;let Q=0;const q=I.getAttributes();for(const ie in q)if(q[ie].location>=0){let _e=K[ie];_e===void 0&&(ie==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),ie==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor));const Ee={};Ee.attribute=_e,_e&&_e.data&&(Ee.data=_e.data),Y[ie]=Ee,Q++}s.attributes=Y,s.attributesNum=Q,s.index=A}function R(){const x=s.newAttributes;for(let T=0,I=x.length;T<I;T++)x[T]=0}function y(x){g(x,0)}function g(x,T){const I=s.newAttributes,A=s.enabledAttributes,Y=s.attributeDivisors;I[x]=1,A[x]===0&&(i.enableVertexAttribArray(x),A[x]=1),Y[x]!==T&&(i.vertexAttribDivisor(x,T),Y[x]=T)}function D(){const x=s.newAttributes,T=s.enabledAttributes;for(let I=0,A=T.length;I<A;I++)T[I]!==x[I]&&(i.disableVertexAttribArray(I),T[I]=0)}function N(x,T,I,A,Y,K,Q){Q===!0?i.vertexAttribIPointer(x,T,I,Y,K):i.vertexAttribPointer(x,T,I,A,Y,K)}function L(x,T,I,A){R();const Y=A.attributes,K=I.getAttributes(),Q=T.defaultAttributeValues;for(const q in K){const ie=K[q];if(ie.location>=0){let xe=Y[q];if(xe===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),xe!==void 0){const _e=xe.normalized,Ee=xe.itemSize,Ke=e.get(xe);if(Ke===void 0)continue;const Ye=Ke.buffer,St=Ke.type,vt=Ke.bytesPerElement,Z=St===i.INT||St===i.UNSIGNED_INT||xe.gpuType===qc;if(xe.isInterleavedBufferAttribute){const re=xe.data,Te=re.stride,Ge=xe.offset;if(re.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ie.locationSize;Ie++)g(ie.location+Ie,re.meshPerAttribute);x.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<ie.locationSize;Ie++)y(ie.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ie=0;Ie<ie.locationSize;Ie++)N(ie.location+Ie,Ee/ie.locationSize,St,_e,Te*vt,(Ge+Ee/ie.locationSize*Ie)*vt,Z)}else{if(xe.isInstancedBufferAttribute){for(let re=0;re<ie.locationSize;re++)g(ie.location+re,xe.meshPerAttribute);x.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let re=0;re<ie.locationSize;re++)y(ie.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let re=0;re<ie.locationSize;re++)N(ie.location+re,Ee/ie.locationSize,St,_e,Ee*vt,Ee/ie.locationSize*re*vt,Z)}}else if(Q!==void 0){const _e=Q[q];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ie.location,_e);break;case 3:i.vertexAttrib3fv(ie.location,_e);break;case 4:i.vertexAttrib4fv(ie.location,_e);break;default:i.vertexAttrib1fv(ie.location,_e)}}}}D()}function U(){M();for(const x in n){const T=n[x];for(const I in T){const A=T[I];for(const Y in A)h(A[Y].object),delete A[Y];delete T[I]}delete n[x]}}function F(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const I in T){const A=T[I];for(const Y in A)h(A[Y].object),delete A[Y];delete T[I]}delete n[x.id]}function S(x){for(const T in n){const I=n[T];if(I[x.id]===void 0)continue;const A=I[x.id];for(const Y in A)h(A[Y].object),delete A[Y];delete I[x.id]}}function M(){m(),o=!0,s!==r&&(s=r,u(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:M,resetDefaultState:m,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:S,initAttributes:R,enableAttribute:y,disableUnusedAttributes:D}}function lv(i,e,t){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}function l(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let v=0;for(let b=0;b<d;b++)v+=h[b];t.update(v,n,1)}function c(u,h,d,p){if(d===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<u.length;b++)o(u[b],h[b],p[b]);else{v.multiDrawArraysInstancedWEBGL(n,u,0,h,0,p,0,d);let b=0;for(let R=0;R<d;R++)b+=h[R]*p[R];t.update(b,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function cv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Ln&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(S){const M=S===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==wn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==zn&&!M)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(Xe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=i.getParameter(i.MAX_SAMPLES),F=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:v,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:L,maxSamples:U,samples:F}}function uv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new tr,l=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const v=d.length!==0||p||n!==0||r;return r=p,n=d.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,v){const b=d.clippingPlanes,R=d.clipIntersection,y=d.clipShadows,g=i.get(d);if(!r||b===null||b.length===0||s&&!y)s?h(null):u();else{const D=s?0:n,N=D*4;let L=g.clippingState||null;c.value=L,L=h(b,p,N,v);for(let U=0;U!==N;++U)L[U]=t[U];g.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,v,b){const R=d!==null?d.length:0;let y=null;if(R!==0){if(y=c.value,b!==!0||y===null){const g=v+R*4,D=p.matrixWorldInverse;l.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let N=0,L=v;N!==R;++N,L+=4)o.copy(d[N]).applyMatrix4(D,l),o.normal.toArray(y,L),y[L+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function hv(i){let e=new WeakMap;function t(o,l){return l===Ul?o.mapping=hr:l===Fl&&(o.mapping=Yr),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Ul||l===Fl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new bd(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ci=4,Sh=[.125,.215,.35,.446,.526,.582],rr=20,fv=256,ws=new Cd,Th=new Et;let ul=null,hl=0,fl=0,dl=!1;const dv=new X;class Mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:l=dv}=s;ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,hl,fl),this._renderer.xr.enabled=dl,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:li,format:Ln,colorSpace:Qr,depthBuffer:!1},r=Ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pv(s)),this._blurMaterial=gv(s,e,t),this._ggxMaterial=mv(s,e,t)}return r}_compileMaterial(e){const t=new hi(new pi,e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,r,s){const c=new bn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,v=d.toneMapping;d.getClearColor(Th),d.toneMapping=Hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hi(new to,new yd({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let g=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,g=!0):(y.color.copy(Th),g=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(c.up.set(0,u[N],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[N],s.y,s.z)):L===1?(c.up.set(0,0,u[N]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[N],s.z)):(c.up.set(0,u[N],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[N]));const U=this._cubeSize;Or(r,L*U,N>2?U:0,U,U),d.setRenderTarget(r),g&&d.render(R,c),d.render(e,c)}d.toneMapping=v,d.autoClear=p,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hr||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;const c=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-h*h),p=0+u*1.25,v=d*p,{_lodMax:b}=this,R=this._sizeLods[n],y=3*R*(n>b-Ci?n-b+Ci:0),g=4*(this._cubeSize-R);c.envMap.value=e.texture,c.roughness.value=v,c.mipInt.value=b-t,Or(s,y,g,3*R,2*R),r.setRenderTarget(s),r.render(l,ws),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=b-n,Or(e,y,g,3*R,2*R),r.setRenderTarget(e),r.render(l,ws)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,v=this._sizeLods[n]-1,b=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*rr-1),R=s/b,y=isFinite(s)?1+Math.floor(h*R):rr;y>rr&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${rr}`);const g=[];let D=0;for(let S=0;S<rr;++S){const M=S/R,m=Math.exp(-M*M/2);g.push(m),S===0?D+=m:S<y&&(D+=2*m)}for(let S=0;S<g.length;S++)g[S]=g[S]/D;p.envMap.value=e.texture,p.samples.value=y,p.weights.value=g,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:N}=this;p.dTheta.value=b,p.mipInt.value=N-n;const L=this._sizeLods[r],U=3*L*(r>N-Ci?r-N+Ci:0),F=4*(this._cubeSize-L);Or(t,U,F,3*L,2*L),c.setRenderTarget(t),c.render(d,ws)}}function pv(i){const e=[],t=[],n=[];let r=i;const s=i-Ci+1+Sh.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let c=1/l;o>i-Ci?c=Sh[o-i+Ci-1]:o===0&&(c=0),t.push(c);const u=1/(l-2),h=-u,d=1+u,p=[h,h,d,h,d,d,h,h,d,d,h,d],v=6,b=6,R=3,y=2,g=1,D=new Float32Array(R*b*v),N=new Float32Array(y*b*v),L=new Float32Array(g*b*v);for(let F=0;F<v;F++){const S=F%3*2/3-1,M=F>2?0:-1,m=[S,M,0,S+2/3,M,0,S+2/3,M+1,0,S,M,0,S+2/3,M+1,0,S,M+1,0];D.set(m,R*b*F),N.set(p,y*b*F);const x=[F,F,F,F,F,F];L.set(x,g*b*F)}const U=new pi;U.setAttribute("position",new Xn(D,R)),U.setAttribute("uv",new Xn(N,y)),U.setAttribute("faceIndex",new Xn(L,g)),n.push(new hi(U,null)),r>Ci&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ah(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function mv(i,e,t){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function gv(i,e,t){const n=new Float32Array(rr),r=new X(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function bh(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function wh(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _v(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===Ul||c===Fl,h=c===hr||c===Yr;if(u||h){let d=e.get(l);const p=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return t===null&&(t=new Mh(i)),d=u?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const v=l.image;return u&&v&&v.height>0||h&&v&&r(v)?(t===null&&(t=new Mh(i)),d=u?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ws("WebGLRenderer: "+n+" extension not supported."),r}}}function xv(i,e,t,n){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const b in p.attributes)e.remove(p.attributes[b]);p.removeEventListener("dispose",o),delete r[p.id];const v=s.get(p);v&&(e.remove(v),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const v in p)e.update(p[v],i.ARRAY_BUFFER)}function u(d){const p=[],v=d.index,b=d.attributes.position;let R=0;if(v!==null){const D=v.array;R=v.version;for(let N=0,L=D.length;N<L;N+=3){const U=D[N+0],F=D[N+1],S=D[N+2];p.push(U,F,F,S,S,U)}}else if(b!==void 0){const D=b.array;R=b.version;for(let N=0,L=D.length/3-1;N<L;N+=3){const U=N+0,F=N+1,S=N+2;p.push(U,F,F,S,S,U)}}else return;const y=new(gd(p)?Sd:Ed)(p,1);y.version=R;const g=s.get(d);g&&e.remove(g),s.set(d,y)}function h(d){const p=s.get(d);if(p){const v=d.index;v!==null&&p.version<v.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function yv(i,e,t){let n;function r(p){n=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function c(p,v){i.drawElements(n,v,s,p*o),t.update(v,n,1)}function u(p,v,b){b!==0&&(i.drawElementsInstanced(n,v,s,p*o,b),t.update(v,n,b))}function h(p,v,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,p,0,b);let y=0;for(let g=0;g<b;g++)y+=v[g];t.update(y,n,1)}function d(p,v,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<p.length;g++)u(p[g]/o,v[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,s,p,0,R,0,b);let g=0;for(let D=0;D<b;D++)g+=v[D]*R[D];t.update(g,n,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ev(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sv(i,e,t){const n=new WeakMap,r=new Nt;function s(o,l,c){const u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(l);if(p===void 0||p.count!==d){let x=function(){M.dispose(),n.delete(l),l.removeEventListener("dispose",x)};var v=x;p!==void 0&&p.texture.dispose();const b=l.morphAttributes.position!==void 0,R=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],D=l.morphAttributes.normal||[],N=l.morphAttributes.color||[];let L=0;b===!0&&(L=1),R===!0&&(L=2),y===!0&&(L=3);let U=l.attributes.position.count*L,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const S=new Float32Array(U*F*4*d),M=new _d(S,U,F,d);M.type=zn,M.needsUpdate=!0;const m=L*4;for(let T=0;T<d;T++){const I=g[T],A=D[T],Y=N[T],K=U*F*4*T;for(let Q=0;Q<I.count;Q++){const q=Q*m;b===!0&&(r.fromBufferAttribute(I,Q),S[K+q+0]=r.x,S[K+q+1]=r.y,S[K+q+2]=r.z,S[K+q+3]=0),R===!0&&(r.fromBufferAttribute(A,Q),S[K+q+4]=r.x,S[K+q+5]=r.y,S[K+q+6]=r.z,S[K+q+7]=0),y===!0&&(r.fromBufferAttribute(Y,Q),S[K+q+8]=r.x,S[K+q+9]=r.y,S[K+q+10]=r.z,S[K+q+11]=Y.itemSize===4?r.w:1)}}p={count:d,texture:M,size:new At(U,F)},n.set(l,p),l.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let b=0;for(let y=0;y<u.length;y++)b+=u[y];const R=l.morphTargetsRelative?1:1-b;c.getUniforms().setValue(i,"morphTargetBaseInfluence",R),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Tv(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Mv={[td]:"LINEAR_TONE_MAPPING",[nd]:"REINHARD_TONE_MAPPING",[id]:"CINEON_TONE_MAPPING",[rd]:"ACES_FILMIC_TONE_MAPPING",[od]:"AGX_TONE_MAPPING",[ad]:"NEUTRAL_TONE_MAPPING",[sd]:"CUSTOM_TONE_MAPPING"};function Av(i,e,t,n,r){const s=new Wn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Wn(e,t,{type:li,depthBuffer:!1,stencilBuffer:!1}),l=new pi;l.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ai([0,2,0,0,2,0],2));const c=new yg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new hi(l,c),h=new Cd(-1,1,1,-1,0,1);let d=null,p=null,v=!1,b,R=null,y=[],g=!1;this.setSize=function(D,N){s.setSize(D,N),o.setSize(D,N);for(let L=0;L<y.length;L++){const U=y[L];U.setSize&&U.setSize(D,N)}},this.setEffects=function(D){y=D,g=y.length>0&&y[0].isRenderPass===!0;const N=s.width,L=s.height;for(let U=0;U<y.length;U++){const F=y[U];F.setSize&&F.setSize(N,L)}},this.begin=function(D,N){if(v||D.toneMapping===Hn&&y.length===0)return!1;if(R=N,N!==null){const L=N.width,U=N.height;(s.width!==L||s.height!==U)&&this.setSize(L,U)}return g===!1&&D.setRenderTarget(s),b=D.toneMapping,D.toneMapping=Hn,!0},this.hasRenderPass=function(){return g},this.end=function(D,N){D.toneMapping=b,v=!0;let L=s,U=o;for(let F=0;F<y.length;F++){const S=y[F];if(S.enabled!==!1&&(S.render(D,U,L,N),S.needsSwap!==!1)){const M=L;L=U,U=M}}if(d!==D.outputColorSpace||p!==D.toneMapping){d=D.outputColorSpace,p=D.toneMapping,c.defines={},ft.getTransfer(d)===yt&&(c.defines.SRGB_TRANSFER="");const F=Mv[p];F&&(c.defines[F]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(R),D.render(u,h),R=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Pd=new mn,vc=new Xs(1,1),Dd=new _d,Ld=new Ym,Nd=new Ad,Rh=[],Ch=[],Ih=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function os(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Rh[r];if(s===void 0&&(s=new Float32Array(r),Rh[r]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(s,l)}return s}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Dh.set(n),i.uniformMatrix2fv(this.addr,!1,Dh),$t(t,n)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Ph.set(n),i.uniformMatrix3fv(this.addr,!1,Ph),$t(t,n)}}function Dv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),$t(t,n)}}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function zv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=t.isReversedDepthBuffer()?Zc:Jc,s=vc):s=Pd,t.setTexture2D(e||s,r)}function Gv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ld,r)}function Hv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nd,r)}function Wv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dd,r)}function Xv(i){switch(i){case 5126:return bv;case 35664:return wv;case 35665:return Rv;case 35666:return Cv;case 35674:return Iv;case 35675:return Pv;case 35676:return Dv;case 5124:case 35670:return Lv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Fv;case 5125:return Ov;case 36294:return Vv;case 36295:return Bv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Wv}}function qv(i,e){i.uniform1fv(this.addr,e)}function $v(i,e){const t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function jv(i,e){const t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){const t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function Kv(i,e){const t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qv(i,e){const t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jv(i,e){const t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function ex(i,e){i.uniform2iv(this.addr,e)}function tx(i,e){i.uniform3iv(this.addr,e)}function nx(i,e){i.uniform4iv(this.addr,e)}function ix(i,e){i.uniform1uiv(this.addr,e)}function rx(i,e){i.uniform2uiv(this.addr,e)}function sx(i,e){i.uniform3uiv(this.addr,e)}function ox(i,e){i.uniform4uiv(this.addr,e)}function ax(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=vc:o=Pd;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||o,s[l])}function lx(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ld,s[o])}function cx(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nd,s[o])}function ux(i,e,t){const n=this.cache,r=e.length,s=xa(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dd,s[o])}function hx(i){switch(i){case 5126:return qv;case 35664:return $v;case 35665:return jv;case 35666:return Yv;case 35674:return Kv;case 35675:return Qv;case 35676:return Jv;case 5124:case 35670:return Zv;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return rx;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return ux}}class fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xv(t.type)}}class dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hx(t.type)}}class px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Lh(i,e){i.seq.push(e),i.map[e.id]=e}function mx(i,e,t){const n=i.name,r=n.length;for(pl.lastIndex=0;;){const s=pl.exec(n),o=pl.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){Lh(t,u===void 0?new fx(l,i,e):new dx(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new px(l),Lh(t,d)),t=d}}}class Yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);mx(l,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gx=37297;let _x=0;function vx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Uh=new Qe;function xx(i){ft._getMatrix(Uh,ft.workingColorSpace,i);const e=`mat3( ${Uh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+vx(i.getShaderSource(e),l)}else return s}function yx(i,e){const t=xx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ex={[td]:"Linear",[nd]:"Reinhard",[id]:"Cineon",[rd]:"ACESFilmic",[od]:"AgX",[ad]:"Neutral",[sd]:"Custom"};function Sx(i,e){const t=Ex[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new X;function Tx(){ft.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function Ax(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Ps(i){return i!==""}function Oh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(i){return i.replace(wx,Cx)}const Rx=new Map;function Cx(i,e){let t=Ze[e];if(t===void 0){const n=Rx.get(e);if(n!==void 0)t=Ze[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xc(t)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(i){return i.replace(Ix,Px)}function Px(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dx={[Wo]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function Lx(i){return Dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nx={[hr]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function Ux(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fx={[Yr]:"ENVMAP_MODE_REFRACTION"};function Ox(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vx={[ed]:"ENVMAP_BLENDING_MULTIPLY",[Cm]:"ENVMAP_BLENDING_MIX",[Im]:"ENVMAP_BLENDING_ADD"};function Bx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vx[i.combine]||"ENVMAP_BLENDING_NONE"}function kx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zx(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Lx(t),u=Ux(t),h=Ox(t),d=Bx(t),p=kx(t),v=Mx(t),b=Ax(s),R=r.createProgram();let y,g,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ps).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ps).join(`
`),g.length>0&&(g+=`
`)):(y=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),g=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),Tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),o=xc(o),o=Oh(o,t),o=Vh(o,t),l=xc(l),l=Oh(l,t),l=Vh(l,t),o=Bh(o),l=Bh(l),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=D+y+o,L=D+g+l,U=Nh(r,r.VERTEX_SHADER,N),F=Nh(r,r.FRAGMENT_SHADER,L);r.attachShader(R,U),r.attachShader(R,F),t.index0AttributeName!==void 0?r.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(R,0,"position"),r.linkProgram(R);function S(T){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(R)||"",A=r.getShaderInfoLog(U)||"",Y=r.getShaderInfoLog(F)||"",K=I.trim(),Q=A.trim(),q=Y.trim();let ie=!0,xe=!0;if(r.getProgramParameter(R,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,R,U,F);else{const _e=Fh(r,U,"vertex"),Ee=Fh(r,F,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(R,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+K+`
`+_e+`
`+Ee)}else K!==""?Xe("WebGLProgram: Program Info Log:",K):(Q===""||q==="")&&(xe=!1);xe&&(T.diagnostics={runnable:ie,programLog:K,vertexShader:{log:Q,prefix:y},fragmentShader:{log:q,prefix:g}})}r.deleteShader(U),r.deleteShader(F),M=new Yo(r,R),m=bx(r,R)}let M;this.getUniforms=function(){return M===void 0&&S(this),M};let m;this.getAttributes=function(){return m===void 0&&S(this),m};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(R,gx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_x++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=U,this.fragmentShader=F,this}let Gx=0;class Hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wx(e),t.set(e,n)),n}}class Wx{constructor(e){this.id=Gx++,this.code=e,this.usedTimes=0}}function Xx(i,e,t,n,r,s,o){const l=new vd,c=new Hx,u=new Set,h=[],d=new Map,p=r.logarithmicDepthBuffer;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(m){return u.add(m),m===0?"uv":`uv${m}`}function y(m,x,T,I,A){const Y=I.fog,K=A.geometry,Q=m.isMeshStandardMaterial?I.environment:null,q=(m.isMeshStandardMaterial?t:e).get(m.envMap||Q),ie=q&&q.mapping===ma?q.image.height:null,xe=b[m.type];m.precision!==null&&(v=r.getMaxPrecision(m.precision),v!==m.precision&&Xe("WebGLProgram.getParameters:",m.precision,"not supported, using",v,"instead."));const _e=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ee=_e!==void 0?_e.length:0;let Ke=0;K.morphAttributes.position!==void 0&&(Ke=1),K.morphAttributes.normal!==void 0&&(Ke=2),K.morphAttributes.color!==void 0&&(Ke=3);let Ye,St,vt,Z;if(xe){const nt=Vn[xe];Ye=nt.vertexShader,St=nt.fragmentShader}else Ye=m.vertexShader,St=m.fragmentShader,c.update(m),vt=c.getVertexShaderID(m),Z=c.getFragmentShaderID(m);const re=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ge=A.isInstancedMesh===!0,Ie=A.isBatchedMesh===!0,ot=!!m.map,Dt=!!m.matcap,et=!!q,pt=!!m.aoMap,xt=!!m.lightMap,$e=!!m.bumpMap,Ct=!!m.normalMap,O=!!m.displacementMap,tt=!!m.emissiveMap,ke=!!m.metalnessMap,_t=!!m.roughnessMap,Pe=m.anisotropy>0,P=m.clearcoat>0,E=m.dispersion>0,B=m.iridescence>0,J=m.sheen>0,ne=m.transmission>0,j=Pe&&!!m.anisotropyMap,De=P&&!!m.clearcoatMap,pe=P&&!!m.clearcoatNormalMap,Re=P&&!!m.clearcoatRoughnessMap,Ve=B&&!!m.iridescenceMap,se=B&&!!m.iridescenceThicknessMap,he=J&&!!m.sheenColorMap,be=J&&!!m.sheenRoughnessMap,Me=!!m.specularMap,fe=!!m.specularColorMap,He=!!m.specularIntensityMap,V=ne&&!!m.transmissionMap,ge=ne&&!!m.thicknessMap,ae=!!m.gradientMap,ce=!!m.alphaMap,oe=m.alphaTest>0,ee=!!m.alphaHash,le=!!m.extensions;let ze=Hn;m.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=i.toneMapping);const Tt={shaderID:xe,shaderType:m.type,shaderName:m.name,vertexShader:Ye,fragmentShader:St,defines:m.defines,customVertexShaderID:vt,customFragmentShaderID:Z,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:v,batching:Ie,batchingColor:Ie&&A._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&A.instanceColor!==null,instancingMorph:Ge&&A.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Qr,alphaToCoverage:!!m.alphaToCoverage,map:ot,matcap:Dt,envMap:et,envMapMode:et&&q.mapping,envMapCubeUVHeight:ie,aoMap:pt,lightMap:xt,bumpMap:$e,normalMap:Ct,displacementMap:O,emissiveMap:tt,normalMapObjectSpace:Ct&&m.normalMapType===Nm,normalMapTangentSpace:Ct&&m.normalMapType===Lm,metalnessMap:ke,roughnessMap:_t,anisotropy:Pe,anisotropyMap:j,clearcoat:P,clearcoatMap:De,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:E,iridescence:B,iridescenceMap:Ve,iridescenceThicknessMap:se,sheen:J,sheenColorMap:he,sheenRoughnessMap:be,specularMap:Me,specularColorMap:fe,specularIntensityMap:He,transmission:ne,transmissionMap:V,thicknessMap:ge,gradientMap:ae,opaque:m.transparent===!1&&m.blending===Gr&&m.alphaToCoverage===!1,alphaMap:ce,alphaTest:oe,alphaHash:ee,combine:m.combine,mapUv:ot&&R(m.map.channel),aoMapUv:pt&&R(m.aoMap.channel),lightMapUv:xt&&R(m.lightMap.channel),bumpMapUv:$e&&R(m.bumpMap.channel),normalMapUv:Ct&&R(m.normalMap.channel),displacementMapUv:O&&R(m.displacementMap.channel),emissiveMapUv:tt&&R(m.emissiveMap.channel),metalnessMapUv:ke&&R(m.metalnessMap.channel),roughnessMapUv:_t&&R(m.roughnessMap.channel),anisotropyMapUv:j&&R(m.anisotropyMap.channel),clearcoatMapUv:De&&R(m.clearcoatMap.channel),clearcoatNormalMapUv:pe&&R(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&R(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&R(m.iridescenceMap.channel),iridescenceThicknessMapUv:se&&R(m.iridescenceThicknessMap.channel),sheenColorMapUv:he&&R(m.sheenColorMap.channel),sheenRoughnessMapUv:be&&R(m.sheenRoughnessMap.channel),specularMapUv:Me&&R(m.specularMap.channel),specularColorMapUv:fe&&R(m.specularColorMap.channel),specularIntensityMapUv:He&&R(m.specularIntensityMap.channel),transmissionMapUv:V&&R(m.transmissionMap.channel),thicknessMapUv:ge&&R(m.thicknessMap.channel),alphaMapUv:ce&&R(m.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ct||Pe),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!K.attributes.uv&&(ot||ce),fog:!!Y,useFog:m.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Te,skinning:A.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:ot&&m.map.isVideoTexture===!0&&ft.getTransfer(m.map.colorSpace)===yt,decodeVideoTextureEmissive:tt&&m.emissiveMap.isVideoTexture===!0&&ft.getTransfer(m.emissiveMap.colorSpace)===yt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ii,flipSided:m.side===vn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:le&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&m.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Tt.vertexUv1s=u.has(1),Tt.vertexUv2s=u.has(2),Tt.vertexUv3s=u.has(3),u.clear(),Tt}function g(m){const x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(const T in m.defines)x.push(T),x.push(m.defines[T]);return m.isRawShaderMaterial===!1&&(D(x,m),N(x,m),x.push(i.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()}function D(m,x){m.push(x.precision),m.push(x.outputColorSpace),m.push(x.envMapMode),m.push(x.envMapCubeUVHeight),m.push(x.mapUv),m.push(x.alphaMapUv),m.push(x.lightMapUv),m.push(x.aoMapUv),m.push(x.bumpMapUv),m.push(x.normalMapUv),m.push(x.displacementMapUv),m.push(x.emissiveMapUv),m.push(x.metalnessMapUv),m.push(x.roughnessMapUv),m.push(x.anisotropyMapUv),m.push(x.clearcoatMapUv),m.push(x.clearcoatNormalMapUv),m.push(x.clearcoatRoughnessMapUv),m.push(x.iridescenceMapUv),m.push(x.iridescenceThicknessMapUv),m.push(x.sheenColorMapUv),m.push(x.sheenRoughnessMapUv),m.push(x.specularMapUv),m.push(x.specularColorMapUv),m.push(x.specularIntensityMapUv),m.push(x.transmissionMapUv),m.push(x.thicknessMapUv),m.push(x.combine),m.push(x.fogExp2),m.push(x.sizeAttenuation),m.push(x.morphTargetsCount),m.push(x.morphAttributeCount),m.push(x.numDirLights),m.push(x.numPointLights),m.push(x.numSpotLights),m.push(x.numSpotLightMaps),m.push(x.numHemiLights),m.push(x.numRectAreaLights),m.push(x.numDirLightShadows),m.push(x.numPointLightShadows),m.push(x.numSpotLightShadows),m.push(x.numSpotLightShadowsWithMaps),m.push(x.numLightProbes),m.push(x.shadowMapType),m.push(x.toneMapping),m.push(x.numClippingPlanes),m.push(x.numClipIntersection),m.push(x.depthPacking)}function N(m,x){l.disableAll(),x.instancing&&l.enable(0),x.instancingColor&&l.enable(1),x.instancingMorph&&l.enable(2),x.matcap&&l.enable(3),x.envMap&&l.enable(4),x.normalMapObjectSpace&&l.enable(5),x.normalMapTangentSpace&&l.enable(6),x.clearcoat&&l.enable(7),x.iridescence&&l.enable(8),x.alphaTest&&l.enable(9),x.vertexColors&&l.enable(10),x.vertexAlphas&&l.enable(11),x.vertexUv1s&&l.enable(12),x.vertexUv2s&&l.enable(13),x.vertexUv3s&&l.enable(14),x.vertexTangents&&l.enable(15),x.anisotropy&&l.enable(16),x.alphaHash&&l.enable(17),x.batching&&l.enable(18),x.dispersion&&l.enable(19),x.batchingColor&&l.enable(20),x.gradientMap&&l.enable(21),m.push(l.mask),l.disableAll(),x.fog&&l.enable(0),x.useFog&&l.enable(1),x.flatShading&&l.enable(2),x.logarithmicDepthBuffer&&l.enable(3),x.reversedDepthBuffer&&l.enable(4),x.skinning&&l.enable(5),x.morphTargets&&l.enable(6),x.morphNormals&&l.enable(7),x.morphColors&&l.enable(8),x.premultipliedAlpha&&l.enable(9),x.shadowMapEnabled&&l.enable(10),x.doubleSided&&l.enable(11),x.flipSided&&l.enable(12),x.useDepthPacking&&l.enable(13),x.dithering&&l.enable(14),x.transmission&&l.enable(15),x.sheen&&l.enable(16),x.opaque&&l.enable(17),x.pointsUvs&&l.enable(18),x.decodeVideoTexture&&l.enable(19),x.decodeVideoTextureEmissive&&l.enable(20),x.alphaToCoverage&&l.enable(21),m.push(l.mask)}function L(m){const x=b[m.type];let T;if(x){const I=Vn[x];T=cg.clone(I.uniforms)}else T=m.uniforms;return T}function U(m,x){let T=d.get(x);return T!==void 0?++T.usedTimes:(T=new zx(i,x,m,s),h.push(T),d.set(x,T)),T}function F(m){if(--m.usedTimes===0){const x=h.indexOf(m);h[x]=h[h.length-1],h.pop(),d.delete(m.cacheKey),m.destroy()}}function S(m){c.remove(m)}function M(){c.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:L,acquireProgram:U,releaseProgram:F,releaseShaderCache:S,programs:h,dispose:M}}function qx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function $x(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,p,v,b,R,y){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:p,material:v,groupOrder:b,renderOrder:d.renderOrder,z:R,group:y},i[e]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=v,g.groupOrder=b,g.renderOrder=d.renderOrder,g.z=R,g.group=y),e++,g}function l(d,p,v,b,R,y){const g=o(d,p,v,b,R,y);v.transmission>0?n.push(g):v.transparent===!0?r.push(g):t.push(g)}function c(d,p,v,b,R,y){const g=o(d,p,v,b,R,y);v.transmission>0?n.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,p){t.length>1&&t.sort(d||$x),n.length>1&&n.sort(p||zh),r.length>1&&r.sort(p||zh)}function h(){for(let d=e,p=i.length;d<p;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function jx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Gh,i.set(n,[o])):r>=s.length?(o=new Gh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Et};break;case"SpotLight":t={position:new X,direction:new X,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function Kx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qx=0;function Jx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zx(i){const e=new Yx,t=Kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new X);const r=new X,s=new Gt,o=new Gt;function l(u){let h=0,d=0,p=0;for(let m=0;m<9;m++)n.probe[m].set(0,0,0);let v=0,b=0,R=0,y=0,g=0,D=0,N=0,L=0,U=0,F=0,S=0;u.sort(Jx);for(let m=0,x=u.length;m<x;m++){const T=u[m],I=T.color,A=T.intensity,Y=T.distance;let K=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Kr?K=T.shadow.map.texture:K=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=I.r*A,d+=I.g*A,p+=I.b*A;else if(T.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(T.sh.coefficients[Q],A);S++}else if(T.isDirectionalLight){const Q=e.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,ie=t.get(T);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.directionalShadow[v]=ie,n.directionalShadowMap[v]=K,n.directionalShadowMatrix[v]=T.shadow.matrix,D++}n.directional[v]=Q,v++}else if(T.isSpotLight){const Q=e.get(T);Q.position.setFromMatrixPosition(T.matrixWorld),Q.color.copy(I).multiplyScalar(A),Q.distance=Y,Q.coneCos=Math.cos(T.angle),Q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Q.decay=T.decay,n.spot[R]=Q;const q=T.shadow;if(T.map&&(n.spotLightMap[U]=T.map,U++,q.updateMatrices(T),T.castShadow&&F++),n.spotLightMatrix[R]=q.matrix,T.castShadow){const ie=t.get(T);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.spotShadow[R]=ie,n.spotShadowMap[R]=K,L++}R++}else if(T.isRectAreaLight){const Q=e.get(T);Q.color.copy(I).multiplyScalar(A),Q.halfWidth.set(T.width*.5,0,0),Q.halfHeight.set(0,T.height*.5,0),n.rectArea[y]=Q,y++}else if(T.isPointLight){const Q=e.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),Q.distance=T.distance,Q.decay=T.decay,T.castShadow){const q=T.shadow,ie=t.get(T);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,n.pointShadow[b]=ie,n.pointShadowMap[b]=K,n.pointShadowMatrix[b]=T.shadow.matrix,N++}n.point[b]=Q,b++}else if(T.isHemisphereLight){const Q=e.get(T);Q.skyColor.copy(T.color).multiplyScalar(A),Q.groundColor.copy(T.groundColor).multiplyScalar(A),n.hemi[g]=Q,g++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const M=n.hash;(M.directionalLength!==v||M.pointLength!==b||M.spotLength!==R||M.rectAreaLength!==y||M.hemiLength!==g||M.numDirectionalShadows!==D||M.numPointShadows!==N||M.numSpotShadows!==L||M.numSpotMaps!==U||M.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=R,n.rectArea.length=y,n.point.length=b,n.hemi.length=g,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=N,n.pointShadowMap.length=N,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=N,n.spotLightMatrix.length=L+U-F,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=S,M.directionalLength=v,M.pointLength=b,M.spotLength=R,M.rectAreaLength=y,M.hemiLength=g,M.numDirectionalShadows=D,M.numPointShadows=N,M.numSpotShadows=L,M.numSpotMaps=U,M.numLightProbes=S,n.version=Qx++)}function c(u,h){let d=0,p=0,v=0,b=0,R=0;const y=h.matrixWorldInverse;for(let g=0,D=u.length;g<D;g++){const N=u[g];if(N.isDirectionalLight){const L=n.directional[d];L.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(y),d++}else if(N.isSpotLight){const L=n.spot[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(y),v++}else if(N.isRectAreaLight){const L=n.rectArea[b];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),o.identity(),s.copy(N.matrixWorld),s.premultiply(y),o.extractRotation(s),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),b++}else if(N.isPointLight){const L=n.point[p];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),p++}else if(N.isHemisphereLight){const L=n.hemi[R];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),R++}}}return{setup:l,setupView:c,state:n}}function Hh(i){const e=new Zx(i),t=[],n=[];function r(h){u.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function l(){e.setup(t)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function ey(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let l;return o===void 0?(l=new Hh(i),e.set(r,[l])):s>=o.length?(l=new Hh(i),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iy=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],ry=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Wh=new Gt,Rs=new X,ml=new X;function sy(i,e,t){let n=new wd;const r=new At,s=new At,o=new Nt,l=new Eg,c=new Sg,u={},h=t.maxTextureSize,d={[Vi]:vn,[vn]:Vi,[ii]:ii},p=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const b=new pi;b.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new hi(b,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let g=this.type;this.render=function(F,S,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;F.type===um&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Wo);const m=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(si),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const A=g!==this.type;A&&S.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(K=>K.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,K=F.length;Y<K;Y++){const Q=F[Y],q=Q.shadow;if(q===void 0){Xe("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ie=q.getFrameExtents();if(r.multiply(ie),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,q.mapSize.y=s.y)),q.map===null||A===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Is){if(Q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Wn(r.x,r.y,{format:Kr,type:li,minFilter:un,magFilter:un,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new Xs(r.x,r.y,zn),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=ci,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=en,q.map.depthTexture.magFilter=en}else{Q.isPointLight?(q.map=new bd(r.x),q.map.depthTexture=new xg(r.x,$n)):(q.map=new Wn(r.x,r.y),q.map.depthTexture=new Xs(r.x,r.y,$n)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=ci;const _e=i.state.buffers.depth.getReversed();this.type===Wo?(q.map.depthTexture.compareFunction=_e?Zc:Jc,q.map.depthTexture.minFilter=un,q.map.depthTexture.magFilter=un):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=en,q.map.depthTexture.magFilter=en)}q.camera.updateProjectionMatrix()}const xe=q.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<xe;_e++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(q.map),i.clear());const Ee=q.getViewport(_e);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),I.viewport(o)}if(Q.isPointLight){const Ee=q.camera,Ke=q.matrix,Ye=Q.distance||Ee.far;Ye!==Ee.far&&(Ee.far=Ye,Ee.updateProjectionMatrix()),Rs.setFromMatrixPosition(Q.matrixWorld),Ee.position.copy(Rs),ml.copy(Ee.position),ml.add(iy[_e]),Ee.up.copy(ry[_e]),Ee.lookAt(ml),Ee.updateMatrixWorld(),Ke.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Wh.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Wh,Ee.coordinateSystem,Ee.reversedDepth)}else q.updateMatrices(Q);n=q.getFrustum(),L(S,M,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Is&&D(q,M),q.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(m,x,T)};function D(F,S){const M=e.update(R);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,v.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Wn(r.x,r.y,{format:Kr,type:li})),p.uniforms.shadow_pass.value=F.map.depthTexture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(S,null,M,p,R,null),v.uniforms.shadow_pass.value=F.mapPass.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(S,null,M,v,R,null)}function N(F,S,M,m){let x=null;const T=M.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(T!==void 0)x=T;else if(x=M.isPointLight===!0?c:l,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const I=x.uuid,A=S.uuid;let Y=u[I];Y===void 0&&(Y={},u[I]=Y);let K=Y[A];K===void 0&&(K=x.clone(),Y[A]=K,S.addEventListener("dispose",U)),x=K}if(x.visible=S.visible,x.wireframe=S.wireframe,m===Is?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:d[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,M.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=i.properties.get(x);I.light=M}return x}function L(F,S,M,m,x){if(F.visible===!1)return;if(F.layers.test(S.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&x===Is)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,F.matrixWorld);const A=e.update(F),Y=F.material;if(Array.isArray(Y)){const K=A.groups;for(let Q=0,q=K.length;Q<q;Q++){const ie=K[Q],xe=Y[ie.materialIndex];if(xe&&xe.visible){const _e=N(F,xe,m,x);F.onBeforeShadow(i,F,S,M,A,_e,ie),i.renderBufferDirect(M,null,A,_e,F,ie),F.onAfterShadow(i,F,S,M,A,_e,ie)}}}else if(Y.visible){const K=N(F,Y,m,x);F.onBeforeShadow(i,F,S,M,A,K,null),i.renderBufferDirect(M,null,A,K,F,null),F.onAfterShadow(i,F,S,M,A,K,null)}}const I=F.children;for(let A=0,Y=I.length;A<Y;A++)L(I[A],S,M,m,x)}function U(F){F.target.removeEventListener("dispose",U);for(const M in u){const m=u[M],x=F.target.uuid;x in m&&(m[x].dispose(),delete m[x])}}}const oy={[Rl]:Cl,[Il]:Ll,[Pl]:Nl,[jr]:Dl,[Cl]:Rl,[Ll]:Il,[Nl]:Pl,[Dl]:jr};function ay(i,e){function t(){let V=!1;const ge=new Nt;let ae=null;const ce=new Nt(0,0,0,0);return{setMask:function(oe){ae!==oe&&!V&&(i.colorMask(oe,oe,oe,oe),ae=oe)},setLocked:function(oe){V=oe},setClear:function(oe,ee,le,ze,Tt){Tt===!0&&(oe*=ze,ee*=ze,le*=ze),ge.set(oe,ee,le,ze),ce.equals(ge)===!1&&(i.clearColor(oe,ee,le,ze),ce.copy(ge))},reset:function(){V=!1,ae=null,ce.set(-1,0,0,0)}}}function n(){let V=!1,ge=!1,ae=null,ce=null,oe=null;return{setReversed:function(ee){if(ge!==ee){const le=e.get("EXT_clip_control");ee?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),ge=ee;const ze=oe;oe=null,this.setClear(ze)}},getReversed:function(){return ge},setTest:function(ee){ee?re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ee){ae!==ee&&!V&&(i.depthMask(ee),ae=ee)},setFunc:function(ee){if(ge&&(ee=oy[ee]),ce!==ee){switch(ee){case Rl:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Il:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Ll:i.depthFunc(i.GREATER);break;case Nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ee}},setLocked:function(ee){V=ee},setClear:function(ee){oe!==ee&&(ge&&(ee=1-ee),i.clearDepth(ee),oe=ee)},reset:function(){V=!1,ae=null,ce=null,oe=null,ge=!1}}}function r(){let V=!1,ge=null,ae=null,ce=null,oe=null,ee=null,le=null,ze=null,Tt=null;return{setTest:function(nt){V||(nt?re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!V&&(i.stencilMask(nt),ge=nt)},setFunc:function(nt,Tn,Rn){(ae!==nt||ce!==Tn||oe!==Rn)&&(i.stencilFunc(nt,Tn,Rn),ae=nt,ce=Tn,oe=Rn)},setOp:function(nt,Tn,Rn){(ee!==nt||le!==Tn||ze!==Rn)&&(i.stencilOp(nt,Tn,Rn),ee=nt,le=Tn,ze=Rn)},setLocked:function(nt){V=nt},setClear:function(nt){Tt!==nt&&(i.clearStencil(nt),Tt=nt)},reset:function(){V=!1,ge=null,ae=null,ce=null,oe=null,ee=null,le=null,ze=null,Tt=null}}}const s=new t,o=new n,l=new r,c=new WeakMap,u=new WeakMap;let h={},d={},p=new WeakMap,v=[],b=null,R=!1,y=null,g=null,D=null,N=null,L=null,U=null,F=null,S=new Et(0,0,0),M=0,m=!1,x=null,T=null,I=null,A=null,Y=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,q=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=q>=2);let xe=null,_e={};const Ee=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),Ye=new Nt().fromArray(Ee),St=new Nt().fromArray(Ke);function vt(V,ge,ae,ce){const oe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(V,ee),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<ae;le++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ge+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ee}const Z={};Z[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),re(i.DEPTH_TEST),o.setFunc(jr),$e(!1),Ct(Ku),re(i.CULL_FACE),pt(si);function re(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function Te(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function Ge(V,ge){return d[V]!==ge?(i.bindFramebuffer(V,ge),d[V]=ge,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ie(V,ge){let ae=v,ce=!1;if(V){ae=p.get(ge),ae===void 0&&(ae=[],p.set(ge,ae));const oe=V.textures;if(ae.length!==oe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,le=oe.length;ee<le;ee++)ae[ee]=i.COLOR_ATTACHMENT0+ee;ae.length=oe.length,ce=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ce=!0);ce&&i.drawBuffers(ae)}function ot(V){return b!==V?(i.useProgram(V),b=V,!0):!1}const Dt={[ir]:i.FUNC_ADD,[fm]:i.FUNC_SUBTRACT,[dm]:i.FUNC_REVERSE_SUBTRACT};Dt[pm]=i.MIN,Dt[mm]=i.MAX;const et={[gm]:i.ZERO,[_m]:i.ONE,[vm]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[Mm]:i.SRC_ALPHA_SATURATE,[Sm]:i.DST_COLOR,[ym]:i.DST_ALPHA,[xm]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[Tm]:i.ONE_MINUS_DST_COLOR,[Em]:i.ONE_MINUS_DST_ALPHA,[Am]:i.CONSTANT_COLOR,[bm]:i.ONE_MINUS_CONSTANT_COLOR,[wm]:i.CONSTANT_ALPHA,[Rm]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(V,ge,ae,ce,oe,ee,le,ze,Tt,nt){if(V===si){R===!0&&(Te(i.BLEND),R=!1);return}if(R===!1&&(re(i.BLEND),R=!0),V!==hm){if(V!==y||nt!==m){if((g!==ir||L!==ir)&&(i.blendEquation(i.FUNC_ADD),g=ir,L=ir),nt)switch(V){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFunc(i.ONE,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:gt("WebGLState: Invalid blending: ",V);break}else switch(V){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ju:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zu:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",V);break}D=null,N=null,U=null,F=null,S.set(0,0,0),M=0,y=V,m=nt}return}oe=oe||ge,ee=ee||ae,le=le||ce,(ge!==g||oe!==L)&&(i.blendEquationSeparate(Dt[ge],Dt[oe]),g=ge,L=oe),(ae!==D||ce!==N||ee!==U||le!==F)&&(i.blendFuncSeparate(et[ae],et[ce],et[ee],et[le]),D=ae,N=ce,U=ee,F=le),(ze.equals(S)===!1||Tt!==M)&&(i.blendColor(ze.r,ze.g,ze.b,Tt),S.copy(ze),M=Tt),y=V,m=!1}function xt(V,ge){V.side===ii?Te(i.CULL_FACE):re(i.CULL_FACE);let ae=V.side===vn;ge&&(ae=!ae),$e(ae),V.blending===Gr&&V.transparent===!1?pt(si):pt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const ce=V.stencilWrite;l.setTest(ce),ce&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(V){x!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),x=V)}function Ct(V){V!==lm?(re(i.CULL_FACE),V!==T&&(V===Ku?i.cullFace(i.BACK):V===cm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),T=V}function O(V){V!==I&&(Q&&i.lineWidth(V),I=V)}function tt(V,ge,ae){V?(re(i.POLYGON_OFFSET_FILL),(A!==ge||Y!==ae)&&(i.polygonOffset(ge,ae),A=ge,Y=ae)):Te(i.POLYGON_OFFSET_FILL)}function ke(V){V?re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function _t(V){V===void 0&&(V=i.TEXTURE0+K-1),xe!==V&&(i.activeTexture(V),xe=V)}function Pe(V,ge,ae){ae===void 0&&(xe===null?ae=i.TEXTURE0+K-1:ae=xe);let ce=_e[ae];ce===void 0&&(ce={type:void 0,texture:void 0},_e[ae]=ce),(ce.type!==V||ce.texture!==ge)&&(xe!==ae&&(i.activeTexture(ae),xe=ae),i.bindTexture(V,ge||Z[V]),ce.type=V,ce.texture=ge)}function P(){const V=_e[xe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function J(){try{i.texSubImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function ne(){try{i.texSubImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function pe(){try{i.texStorage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function Re(){try{i.texStorage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function Ve(){try{i.texImage2D(...arguments)}catch(V){gt("WebGLState:",V)}}function se(){try{i.texImage3D(...arguments)}catch(V){gt("WebGLState:",V)}}function he(V){Ye.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Ye.copy(V))}function be(V){St.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),St.copy(V))}function Me(V,ge){let ae=u.get(ge);ae===void 0&&(ae=new WeakMap,u.set(ge,ae));let ce=ae.get(V);ce===void 0&&(ce=i.getUniformBlockIndex(ge,V.name),ae.set(V,ce))}function fe(V,ge){const ce=u.get(ge).get(V);c.get(ge)!==ce&&(i.uniformBlockBinding(ge,ce,V.__bindingPointIndex),c.set(ge,ce))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},xe=null,_e={},d={},p=new WeakMap,v=[],b=null,R=!1,y=null,g=null,D=null,N=null,L=null,U=null,F=null,S=new Et(0,0,0),M=0,m=!1,x=null,T=null,I=null,A=null,Y=null,Ye.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:re,disable:Te,bindFramebuffer:Ge,drawBuffers:Ie,useProgram:ot,setBlending:pt,setMaterial:xt,setFlipSided:$e,setCullFace:Ct,setLineWidth:O,setPolygonOffset:tt,setScissorTest:ke,activeTexture:_t,bindTexture:Pe,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:B,texImage2D:Ve,texImage3D:se,updateUBOMapping:Me,uniformBlockBinding:fe,texStorage2D:pe,texStorage3D:Re,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:De,scissor:he,viewport:be,reset:He}}function ly(i,e,t,n,r,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new At,h=new WeakMap;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return v?new OffscreenCanvas(P,E):ia("canvas")}function R(P,E,B){let J=1;const ne=Pe(P);if((ne.width>B||ne.height>B)&&(J=B/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(J*ne.width),De=Math.floor(J*ne.height);d===void 0&&(d=b(j,De));const pe=E?b(j,De):d;return pe.width=j,pe.height=De,pe.getContext("2d").drawImage(P,0,0,j,De),Xe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+De+")."),pe}else return"data"in P&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){i.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(P,E,B,J,ne=!1){if(P!==null){if(i[P]!==void 0)return i[P];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=E;if(E===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),E===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),E===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),E===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),E===i.RGBA){const De=ne?ta:ft.getTransfer(J);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=De===yt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function L(P,E){let B;return P?E===null||E===$n||E===Hs?B=i.DEPTH24_STENCIL8:E===zn?B=i.DEPTH32F_STENCIL8:E===Gs&&(B=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$n||E===Hs?B=i.DEPTH_COMPONENT24:E===zn?B=i.DEPTH_COMPONENT32F:E===Gs&&(B=i.DEPTH_COMPONENT16),B}function U(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),M(E),E.isVideoTexture&&h.delete(E)}function S(P){const E=P.target;E.removeEventListener("dispose",S),x(E)}function M(P){const E=n.get(P);if(E.__webglInit===void 0)return;const B=P.source,J=p.get(B);if(J){const ne=J[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&m(P),Object.keys(J).length===0&&p.delete(B)}n.remove(P)}function m(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const B=P.source,J=p.get(B);delete J[E.__cacheKey],o.memory.textures--}function x(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ne=0;ne<E.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)i.deleteFramebuffer(E.__webglFramebuffer[J]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=P.textures;for(let J=0,ne=B.length;J<ne;J++){const j=n.get(B[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[J])}n.remove(P)}let T=0;function I(){T=0}function A(){const P=T;return P>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),T+=1,P}function Y(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function K(P,E){const B=n.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const J=P.image;if(J===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,P,E);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function Q(P,E){const B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){Z(B,P,E);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function q(P,E){const B=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){Z(B,P,E);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function ie(P,E){const B=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){re(B,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}const xe={[Ol]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Vl]:i.MIRRORED_REPEAT},_e={[en]:i.NEAREST,[Pm]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[sr]:i.LINEAR_MIPMAP_LINEAR},Ee={[Um]:i.NEVER,[km]:i.ALWAYS,[Fm]:i.LESS,[Jc]:i.LEQUAL,[Om]:i.EQUAL,[Zc]:i.GEQUAL,[Vm]:i.GREATER,[Bm]:i.NOTEQUAL};function Ke(P,E){if(E.type===zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===un||E.magFilter===Ba||E.magFilter===vo||E.magFilter===sr||E.minFilter===un||E.minFilter===Ba||E.minFilter===vo||E.minFilter===sr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,xe[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,xe[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,xe[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,_e[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==vo&&E.minFilter!==sr||E.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(P,E){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const J=E.source;let ne=p.get(J);ne===void 0&&(ne={},p.set(J,ne));const j=Y(E);if(j!==P.__cacheKey){ne[j]===void 0&&(ne[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[j].usedTimes++;const De=ne[P.__cacheKey];De!==void 0&&(ne[P.__cacheKey].usedTimes--,De.usedTimes===0&&m(E)),P.__cacheKey=j,P.__webglTexture=ne[j].texture}return B}function St(P,E,B){return Math.floor(Math.floor(P/B)/E)}function vt(P,E,B,J){const j=P.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,B,J,E.data);else{j.sort((se,he)=>se.start-he.start);let De=0;for(let se=1;se<j.length;se++){const he=j[De],be=j[se],Me=he.start+he.count,fe=St(be.start,E.width,4),He=St(he.start,E.width,4);be.start<=Me+1&&fe===He&&St(be.start+be.count-1,E.width,4)===fe?he.count=Math.max(he.count,be.start+be.count-he.start):(++De,j[De]=be)}j.length=De+1;const pe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let se=0,he=j.length;se<he;se++){const be=j[se],Me=Math.floor(be.start/4),fe=Math.ceil(be.count/4),He=Me%E.width,V=Math.floor(Me/E.width),ge=fe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,He,V,ge,ae,B,J,E.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ve)}}function Z(P,E,B){let J=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=i.TEXTURE_3D);const ne=Ye(P,E),j=E.source;t.bindTexture(J,P.__webglTexture,i.TEXTURE0+B);const De=n.get(j);if(j.version!==De.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const pe=ft.getPrimaries(ft.workingColorSpace),Re=E.colorSpace===Ri?null:ft.getPrimaries(E.colorSpace),Ve=E.colorSpace===Ri||pe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let se=R(E.image,!1,r.maxTextureSize);se=_t(E,se);const he=s.convert(E.format,E.colorSpace),be=s.convert(E.type);let Me=N(E.internalFormat,he,be,E.colorSpace,E.isVideoTexture);Ke(J,E);let fe;const He=E.mipmaps,V=E.isVideoTexture!==!0,ge=De.__version===void 0||ne===!0,ae=j.dataReady,ce=U(E,se);if(E.isDepthTexture)Me=L(E.format===or,E.type),ge&&(V?t.texStorage2D(i.TEXTURE_2D,1,Me,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Me,se.width,se.height,0,he,be,null));else if(E.isDataTexture)if(He.length>0){V&&ge&&t.texStorage2D(i.TEXTURE_2D,ce,Me,He[0].width,He[0].height);for(let oe=0,ee=He.length;oe<ee;oe++)fe=He[oe],V?ae&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,he,be,fe.data):t.texImage2D(i.TEXTURE_2D,oe,Me,fe.width,fe.height,0,he,be,fe.data);E.generateMipmaps=!1}else V?(ge&&t.texStorage2D(i.TEXTURE_2D,ce,Me,se.width,se.height),ae&&vt(E,se,he,be)):t.texImage2D(i.TEXTURE_2D,0,Me,se.width,se.height,0,he,be,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Me,He[0].width,He[0].height,se.depth);for(let oe=0,ee=He.length;oe<ee;oe++)if(fe=He[oe],E.format!==Ln)if(he!==null)if(V){if(ae)if(E.layerUpdates.size>0){const le=Eh(fe.width,fe.height,E.format,E.type);for(const ze of E.layerUpdates){const Tt=fe.data.subarray(ze*le/fe.data.BYTES_PER_ELEMENT,(ze+1)*le/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,ze,fe.width,fe.height,1,he,Tt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,fe.width,fe.height,se.depth,he,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Me,fe.width,fe.height,se.depth,0,fe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,fe.width,fe.height,se.depth,he,be,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Me,fe.width,fe.height,se.depth,0,he,be,fe.data)}else{V&&ge&&t.texStorage2D(i.TEXTURE_2D,ce,Me,He[0].width,He[0].height);for(let oe=0,ee=He.length;oe<ee;oe++)fe=He[oe],E.format!==Ln?he!==null?V?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Me,fe.width,fe.height,0,fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ae&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,he,be,fe.data):t.texImage2D(i.TEXTURE_2D,oe,Me,fe.width,fe.height,0,he,be,fe.data)}else if(E.isDataArrayTexture)if(V){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Me,se.width,se.height,se.depth),ae)if(E.layerUpdates.size>0){const oe=Eh(se.width,se.height,E.format,E.type);for(const ee of E.layerUpdates){const le=se.data.subarray(ee*oe/se.data.BYTES_PER_ELEMENT,(ee+1)*oe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,he,be,le)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,be,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,se.width,se.height,se.depth,0,he,be,se.data);else if(E.isData3DTexture)V?(ge&&t.texStorage3D(i.TEXTURE_3D,ce,Me,se.width,se.height,se.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,be,se.data)):t.texImage3D(i.TEXTURE_3D,0,Me,se.width,se.height,se.depth,0,he,be,se.data);else if(E.isFramebufferTexture){if(ge)if(V)t.texStorage2D(i.TEXTURE_2D,ce,Me,se.width,se.height);else{let oe=se.width,ee=se.height;for(let le=0;le<ce;le++)t.texImage2D(i.TEXTURE_2D,le,Me,oe,ee,0,he,be,null),oe>>=1,ee>>=1}}else if(He.length>0){if(V&&ge){const oe=Pe(He[0]);t.texStorage2D(i.TEXTURE_2D,ce,Me,oe.width,oe.height)}for(let oe=0,ee=He.length;oe<ee;oe++)fe=He[oe],V?ae&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,he,be,fe):t.texImage2D(i.TEXTURE_2D,oe,Me,he,be,fe);E.generateMipmaps=!1}else if(V){if(ge){const oe=Pe(se);t.texStorage2D(i.TEXTURE_2D,ce,Me,oe.width,oe.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,be,se)}else t.texImage2D(i.TEXTURE_2D,0,Me,he,be,se);y(E)&&g(J),De.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function re(P,E,B){if(E.image.length!==6)return;const J=Ye(P,E),ne=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+B);const j=n.get(ne);if(ne.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+B);const De=ft.getPrimaries(ft.workingColorSpace),pe=E.colorSpace===Ri?null:ft.getPrimaries(E.colorSpace),Re=E.colorSpace===Ri||De===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!Ve&&!se?he[ee]=R(E.image[ee],!0,r.maxCubemapSize):he[ee]=se?E.image[ee].image:E.image[ee],he[ee]=_t(E,he[ee]);const be=he[0],Me=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),He=N(E.internalFormat,Me,fe,E.colorSpace),V=E.isVideoTexture!==!0,ge=j.__version===void 0||J===!0,ae=ne.dataReady;let ce=U(E,be);Ke(i.TEXTURE_CUBE_MAP,E);let oe;if(Ve){V&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,He,be.width,be.height);for(let ee=0;ee<6;ee++){oe=he[ee].mipmaps;for(let le=0;le<oe.length;le++){const ze=oe[le];E.format!==Ln?Me!==null?V?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,0,0,ze.width,ze.height,Me,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,He,ze.width,ze.height,0,ze.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,0,0,ze.width,ze.height,Me,fe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le,He,ze.width,ze.height,0,Me,fe,ze.data)}}}else{if(oe=E.mipmaps,V&&ge){oe.length>0&&ce++;const ee=Pe(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Me,fe,he[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,he[ee].width,he[ee].height,0,Me,fe,he[ee].data);for(let le=0;le<oe.length;le++){const Tt=oe[le].image[ee].image;V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,0,0,Tt.width,Tt.height,Me,fe,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,He,Tt.width,Tt.height,0,Me,fe,Tt.data)}}else{V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me,fe,he[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,Me,fe,he[ee]);for(let le=0;le<oe.length;le++){const ze=oe[le];V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,0,0,Me,fe,ze.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,le+1,He,Me,fe,ze.image[ee])}}}y(E)&&g(i.TEXTURE_CUBE_MAP),j.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Te(P,E,B,J,ne,j){const De=s.convert(B.format,B.colorSpace),pe=s.convert(B.type),Re=N(B.internalFormat,De,pe,B.colorSpace),Ve=n.get(E),se=n.get(B);if(se.__renderTarget=E,!Ve.__hasExternalTextures){const he=Math.max(1,E.width>>j),be=Math.max(1,E.height>>j);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,Re,he,be,E.depth,0,De,pe,null):t.texImage2D(ne,j,Re,he,be,0,De,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),tt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,se.__webglTexture,0,O(E)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,se.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(P,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const J=E.depthTexture,ne=J&&J.isDepthTexture?J.type:null,j=L(E.stencilBuffer,ne),De=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;tt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(E),j,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(E),j,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,P)}else{const J=E.textures;for(let ne=0;ne<J.length;ne++){const j=J[ne],De=s.convert(j.format,j.colorSpace),pe=s.convert(j.type),Re=N(j.internalFormat,De,pe,j.colorSpace);tt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(E),Re,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(E),Re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(P,E,B){const J=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,E.depthTexture);const Ve=s.convert(E.depthTexture.format),se=s.convert(E.depthTexture.type);let he;E.depthTexture.format===ci?he=i.DEPTH_COMPONENT24:E.depthTexture.format===or&&(he=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,he,E.width,E.height,0,Ve,se,null)}}else K(E.depthTexture,0);const j=ne.__webglTexture,De=O(E),pe=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Re=E.depthTexture.format===or?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ci)tt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,pe,j,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,Re,pe,j,0);else if(E.depthTexture.format===or)tt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,pe,j,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,Re,pe,j,0);else throw new Error("Unknown depthTexture format")}function ot(P){const E=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=J}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(B)for(let J=0;J<6;J++)Ie(E.__webglFramebuffer[J],P,J);else{const J=P.texture.mipmaps;J&&J.length>0?Ie(E.__webglFramebuffer[0],P,0):Ie(E.__webglFramebuffer,P,0)}else if(B){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=i.createRenderbuffer(),Ge(E.__webglDepthbuffer[J],P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ge(E.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(P,E,B){const J=n.get(P);E!==void 0&&Te(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ot(P)}function et(P){const E=P.texture,B=n.get(P),J=n.get(E);P.addEventListener("dispose",S);const ne=P.textures,j=P.isWebGLCubeRenderTarget===!0,De=ne.length>1;if(De||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=E.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let Re=0;Re<E.mipmaps.length;Re++)B.__webglFramebuffer[pe][Re]=i.createFramebuffer()}else B.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)B.__webglFramebuffer[pe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(De)for(let pe=0,Re=ne.length;pe<Re;pe++){const Ve=n.get(ne[pe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&tt(P)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const Re=ne[pe];B.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const Ve=s.convert(Re.format,Re.colorSpace),se=s.convert(Re.type),he=N(Re.internalFormat,Ve,se,Re.colorSpace,P.isXRRenderTarget===!0),be=O(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,he,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)Te(B.__webglFramebuffer[pe][Re],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else Te(B.__webglFramebuffer[pe],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(E)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Re=ne.length;pe<Re;pe++){const Ve=ne[pe],se=n.get(Ve);let he=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,se.__webglTexture),Ke(he,Ve),Te(B.__webglFramebuffer,P,Ve,i.COLOR_ATTACHMENT0+pe,he,0),y(Ve)&&g(he)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,J.__webglTexture),Ke(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)Te(B.__webglFramebuffer[Re],P,E,i.COLOR_ATTACHMENT0,pe,Re);else Te(B.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,pe,0);y(E)&&g(pe),t.unbindTexture()}P.depthBuffer&&ot(P)}function pt(P){const E=P.textures;for(let B=0,J=E.length;B<J;B++){const ne=E[B];if(y(ne)){const j=D(P),De=n.get(ne).__webglTexture;t.bindTexture(j,De),g(j),t.unbindTexture()}}}const xt=[],$e=[];function Ct(P){if(P.samples>0){if(tt(P)===!1){const E=P.textures,B=P.width,J=P.height;let ne=i.COLOR_BUFFER_BIT;const j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(P),pe=E.length>1;if(pe)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Re=P.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ve]);const se=n.get(E[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,ne,i.NEAREST),c===!0&&(xt.length=0,$e.length=0,xt.push(i.COLOR_ATTACHMENT0+Ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xt.push(j),$e.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ve]);const se=n.get(E[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function O(P){return Math.min(r.maxSamples,P.samples)}function tt(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ke(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function _t(P,E){const B=P.colorSpace,J=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Qr&&B!==Ri&&(ft.getTransfer(B)===yt?(J!==Ln||ne!==wn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",B)),E}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=A,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=q,this.setTextureCube=ie,this.rebindTextures=Dt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cy(i,e){function t(n,r=Ri){let s;const o=ft.getTransfer(r);if(n===wn)return i.UNSIGNED_BYTE;if(n===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cd)return i.BYTE;if(n===ud)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===dd)return i.ALPHA;if(n===pd)return i.RGB;if(n===Ln)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===md)return i.RED;if(n===Yc)return i.RED_INTEGER;if(n===Kr)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===Xo||n===qo||n===$o||n===jo)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===kl||n===zl||n===Gl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Wl||n===Xl||n===ql||n===$l||n===jl||n===Yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hl||n===Wl)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ql)return s.COMPRESSED_R11_EAC;if(n===$l)return s.COMPRESSED_SIGNED_R11_EAC;if(n===jl)return s.COMPRESSED_RG11_EAC;if(n===Yl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Ql||n===Jl||n===Zl||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===lc||n===cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Kl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===hc||n===fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===uc)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===pc||n===mc||n===gc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===dc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:uy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hi(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dy extends ss{constructor(e,t){super();const n=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,h=null,d=null,p=null,v=null,b=null;const R=typeof XRWebGLBinding<"u",y=new fy,g={},D=t.getContextAttributes();let N=null,L=null;const U=[],F=[],S=new At;let M=null;const m=new bn;m.viewport=new Nt;const x=new bn;x.viewport=new Nt;const T=[m,x],I=new Tg;let A=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=U[Z];return re===void 0&&(re=new ll,U[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=U[Z];return re===void 0&&(re=new ll,U[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=U[Z];return re===void 0&&(re=new ll,U[Z]=re),re.getHandSpace()};function K(Z){const re=F.indexOf(Z.inputSource);if(re===-1)return;const Te=U[re];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,u||o),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",q);for(let Z=0;Z<U.length;Z++){const re=F[Z];re!==null&&(F[Z]=null,U[Z].disconnect(re))}A=null,Y=null,y.reset();for(const Z in g)delete g[Z];e.setRenderTarget(N),v=null,p=null,d=null,r=null,L=null,vt.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return d===null&&R&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(N=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",q),D.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(S),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,Ie=null;D.depth&&(Ie=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=D.stencil?or:ci,Ge=D.stencil?Hs:$n);const ot={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(ot),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),L=new Wn(p.textureWidth,p.textureHeight,{format:Ln,type:wn,depthTexture:new Xs(p.textureWidth,p.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Te={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new Wn(v.framebufferWidth,v.framebufferHeight,{format:Ln,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(Z){for(let re=0;re<Z.removed.length;re++){const Te=Z.removed[re],Ge=F.indexOf(Te);Ge>=0&&(F[Ge]=null,U[Ge].disconnect(Te))}for(let re=0;re<Z.added.length;re++){const Te=Z.added[re];let Ge=F.indexOf(Te);if(Ge===-1){for(let ot=0;ot<U.length;ot++)if(ot>=F.length){F.push(Te),Ge=ot;break}else if(F[ot]===null){F[ot]=Te,Ge=ot;break}if(Ge===-1)break}const Ie=U[Ge];Ie&&Ie.connect(Te)}}const ie=new X,xe=new X;function _e(Z,re,Te){ie.setFromMatrixPosition(re.matrixWorld),xe.setFromMatrixPosition(Te.matrixWorld);const Ge=ie.distanceTo(xe),Ie=re.projectionMatrix.elements,ot=Te.projectionMatrix.elements,Dt=Ie[14]/(Ie[10]-1),et=Ie[14]/(Ie[10]+1),pt=(Ie[9]+1)/Ie[5],xt=(Ie[9]-1)/Ie[5],$e=(Ie[8]-1)/Ie[0],Ct=(ot[8]+1)/ot[0],O=Dt*$e,tt=Dt*Ct,ke=Ge/(-$e+Ct),_t=ke*-$e;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_t),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Pe=Dt+ke,P=et+ke,E=O-_t,B=tt+(Ge-_t),J=pt*et/P*Pe,ne=xt*et/P*Pe;Z.projectionMatrix.makePerspective(E,B,J,ne,Pe,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ee(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let re=Z.near,Te=Z.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),I.near=x.near=m.near=re,I.far=x.far=m.far=Te,(A!==I.near||Y!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,Y=I.far),I.layers.mask=Z.layers.mask|6,m.layers.mask=I.layers.mask&3,x.layers.mask=I.layers.mask&5;const Ge=Z.parent,Ie=I.cameras;Ee(I,Ge);for(let ot=0;ot<Ie.length;ot++)Ee(Ie[ot],Ge);Ie.length===2?_e(I,m,x):I.projectionMatrix.copy(m.projectionMatrix),Ke(Z,I,Ge)};function Ke(Z,re,Te){Te===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_c*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(I)},this.getCameraTexture=function(Z){return g[Z]};let Ye=null;function St(Z,re){if(h=re.getViewerPose(u||o),b=re,h!==null){const Te=h.views;v!==null&&(e.setRenderTargetFramebuffer(L,v.framebuffer),e.setRenderTarget(L));let Ge=!1;Te.length!==I.cameras.length&&(I.cameras.length=0,Ge=!0);for(let et=0;et<Te.length;et++){const pt=Te[et];let xt=null;if(v!==null)xt=v.getViewport(pt);else{const Ct=d.getViewSubImage(p,pt);xt=Ct.viewport,et===0&&(e.setRenderTargetTextures(L,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(L))}let $e=T[et];$e===void 0&&($e=new bn,$e.layers.enable(et),$e.viewport=new Nt,T[et]=$e),$e.matrix.fromArray(pt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(pt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(xt.x,xt.y,xt.width,xt.height),et===0&&(I.matrix.copy($e.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ge===!0&&I.cameras.push($e)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&R){d=n.getBinding();const et=d.getDepthInformation(Te[0]);et&&et.isValid&&et.texture&&y.init(et,r.renderState)}if(Ie&&Ie.includes("camera-access")&&R){e.state.unbindTexture(),d=n.getBinding();for(let et=0;et<Te.length;et++){const pt=Te[et].camera;if(pt){let xt=g[pt];xt||(xt=new Rd,g[pt]=xt);const $e=d.getCameraImage(pt);xt.sourceTexture=$e}}}}for(let Te=0;Te<U.length;Te++){const Ge=F[Te],Ie=U[Te];Ge!==null&&Ie!==void 0&&Ie.update(Ge,re,u||o)}Ye&&Ye(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),b=null}const vt=new Id;vt.setAnimationLoop(St),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}}const er=new ui,py=new Gt;function my(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,Td(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function r(y,g,D,N,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(y,g):g.isMeshToonMaterial?(s(y,g),d(y,g)):g.isMeshPhongMaterial?(s(y,g),h(y,g)):g.isMeshStandardMaterial?(s(y,g),p(y,g),g.isMeshPhysicalMaterial&&v(y,g,L)):g.isMeshMatcapMaterial?(s(y,g),b(y,g)):g.isMeshDepthMaterial?s(y,g):g.isMeshDistanceMaterial?(s(y,g),R(y,g)):g.isMeshNormalMaterial?s(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&l(y,g)):g.isPointsMaterial?c(y,g,D,N):g.isSpriteMaterial?u(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===vn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===vn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),N=D.envMap,L=D.envMapRotation;N&&(y.envMap.value=N,er.copy(L),er.x*=-1,er.y*=-1,er.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),y.envMapRotation.value.setFromMatrix4(py.makeRotationFromEuler(er)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function l(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function c(y,g,D,N){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=N*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function d(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function p(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function v(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function gy(i,e,t,n){let r={},s={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(D,N){const L=N.program;n.uniformBlockBinding(D,L)}function u(D,N){let L=r[D.id];L===void 0&&(b(D),L=h(D),r[D.id]=L,D.addEventListener("dispose",y));const U=N.program;n.updateUBOMapping(D,U);const F=e.render.frame;s[D.id]!==F&&(p(D),s[D.id]=F)}function h(D){const N=d();D.__bindingPointIndex=N;const L=i.createBuffer(),U=D.__size,F=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,U,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,L),L}function d(){for(let D=0;D<l;D++)if(o.indexOf(D)===-1)return o.push(D),D;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(D){const N=r[D.id],L=D.uniforms,U=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let F=0,S=L.length;F<S;F++){const M=Array.isArray(L[F])?L[F]:[L[F]];for(let m=0,x=M.length;m<x;m++){const T=M[m];if(v(T,F,m,U)===!0){const I=T.__offset,A=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let K=0;K<A.length;K++){const Q=A[K],q=R(Q);typeof Q=="number"||typeof Q=="boolean"?(T.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,I+Y,T.__data)):Q.isMatrix3?(T.__data[0]=Q.elements[0],T.__data[1]=Q.elements[1],T.__data[2]=Q.elements[2],T.__data[3]=0,T.__data[4]=Q.elements[3],T.__data[5]=Q.elements[4],T.__data[6]=Q.elements[5],T.__data[7]=0,T.__data[8]=Q.elements[6],T.__data[9]=Q.elements[7],T.__data[10]=Q.elements[8],T.__data[11]=0):(Q.toArray(T.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(D,N,L,U){const F=D.value,S=N+"_"+L;if(U[S]===void 0)return typeof F=="number"||typeof F=="boolean"?U[S]=F:U[S]=F.clone(),!0;{const M=U[S];if(typeof F=="number"||typeof F=="boolean"){if(M!==F)return U[S]=F,!0}else if(M.equals(F)===!1)return M.copy(F),!0}return!1}function b(D){const N=D.uniforms;let L=0;const U=16;for(let S=0,M=N.length;S<M;S++){const m=Array.isArray(N[S])?N[S]:[N[S]];for(let x=0,T=m.length;x<T;x++){const I=m[x],A=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,K=A.length;Y<K;Y++){const Q=A[Y],q=R(Q),ie=L%U,xe=ie%q.boundary,_e=ie+xe;L+=xe,_e!==0&&U-_e<q.storage&&(L+=U-_e),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=L,L+=q.storage}}}const F=L%U;return F>0&&(L+=U-F),D.__size=L,D.__cache={},this}function R(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const L=o.indexOf(N.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(r[N.id]),delete r[N.id],delete s[N.id]}function g(){for(const D in r)i.deleteBuffer(r[D]);o=[],r={},s={}}return{bind:c,update:u,dispose:g}}const _y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function vy(){return Fn===null&&(Fn=new mg(_y,16,16,Kr,li),Fn.name="DFG_LUT",Fn.minFilter=un,Fn.magFilter=un,Fn.wrapS=ri,Fn.wrapT=ri,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class xy{constructor(e={}){const{canvas:t=zm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:v=wn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=o;const R=v,y=new Set([Qc,Kc,Yc]),g=new Set([wn,$n,Gs,Hs,$c,jc]),D=new Uint32Array(4),N=new Int32Array(4);let L=null,U=null;const F=[],S=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const m=this;let x=!1;this._outputColorSpace=An;let T=0,I=0,A=null,Y=-1,K=null;const Q=new Nt,q=new Nt;let ie=null;const xe=new Et(0);let _e=0,Ee=t.width,Ke=t.height,Ye=1,St=null,vt=null;const Z=new Nt(0,0,Ee,Ke),re=new Nt(0,0,Ee,Ke);let Te=!1;const Ge=new wd;let Ie=!1,ot=!1;const Dt=new Gt,et=new X,pt=new Nt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ct(){return A===null?Ye:1}let O=n;function tt(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),O===null){const k="webgl2";if(O=tt(k,w),O===null)throw tt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw gt("WebGLRenderer: "+w.message),w}let ke,_t,Pe,P,E,B,J,ne,j,De,pe,Re,Ve,se,he,be,Me,fe,He,V,ge,ae,ce,oe;function ee(){ke=new vv(O),ke.init(),ae=new cy(O,ke),_t=new cv(O,ke,e,ae),Pe=new ay(O,ke),_t.reversedDepthBuffer&&p&&Pe.buffers.depth.setReversed(!0),P=new Ev(O),E=new qx,B=new ly(O,ke,Pe,E,_t,ae,P),J=new hv(m),ne=new _v(m),j=new Ag(O),ce=new av(O,j),De=new xv(O,j,P,ce),pe=new Tv(O,De,j,P),He=new Sv(O,_t,B),be=new uv(E),Re=new Xx(m,J,ne,ke,_t,ce,be),Ve=new my(m,E),se=new jx,he=new ey(ke),fe=new ov(m,J,ne,Pe,pe,b,c),Me=new sy(m,pe,_t),oe=new gy(O,P,_t,Pe),V=new lv(O,ke,P),ge=new yv(O,ke,P),P.programs=Re.programs,m.capabilities=_t,m.extensions=ke,m.properties=E,m.renderLists=se,m.shadowMap=Me,m.state=Pe,m.info=P}ee(),R!==wn&&(M=new Av(R,t.width,t.height,r,s));const le=new dy(m,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(w){w!==void 0&&(Ye=w,this.setSize(Ee,Ke,!1))},this.getSize=function(w){return w.set(Ee,Ke)},this.setSize=function(w,k,W=!0){if(le.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=w,Ke=k,t.width=Math.floor(w*Ye),t.height=Math.floor(k*Ye),W===!0&&(t.style.width=w+"px",t.style.height=k+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Ee*Ye,Ke*Ye).floor()},this.setDrawingBufferSize=function(w,k,W){Ee=w,Ke=k,Ye=W,t.width=Math.floor(w*W),t.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(R===wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,k,W,H){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,k,W,H),Pe.viewport(Q.copy(Z).multiplyScalar(Ye).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,k,W,H){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,k,W,H),Pe.scissor(q.copy(re).multiplyScalar(Ye).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){Pe.setScissorTest(Te=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,W=!0){let H=0;if(w){let z=!1;if(A!==null){const me=A.texture.format;z=y.has(me)}if(z){const me=A.texture.type,Se=g.has(me),ve=fe.getClearColor(),we=fe.getClearAlpha(),Le=ve.r,Fe=ve.g,Ce=ve.b;Se?(D[0]=Le,D[1]=Fe,D[2]=Ce,D[3]=we,O.clearBufferuiv(O.COLOR,0,D)):(N[0]=Le,N[1]=Fe,N[2]=Ce,N[3]=we,O.clearBufferiv(O.COLOR,0,N))}else H|=O.COLOR_BUFFER_BIT}k&&(H|=O.DEPTH_BUFFER_BIT),W&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),fe.dispose(),se.dispose(),he.dispose(),E.dispose(),J.dispose(),ne.dispose(),pe.dispose(),ce.dispose(),oe.dispose(),Re.dispose(),le.dispose(),le.removeEventListener("sessionstart",mi),le.removeEventListener("sessionend",ao),nn.stop()};function ze(w){w.preventDefault(),rh("WebGLRenderer: Context Lost."),x=!0}function Tt(){rh("WebGLRenderer: Context Restored."),x=!1;const w=P.autoReset,k=Me.enabled,W=Me.autoUpdate,H=Me.needsUpdate,z=Me.type;ee(),P.autoReset=w,Me.enabled=k,Me.autoUpdate=W,Me.needsUpdate=H,Me.type=z}function nt(w){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tn(w){const k=w.target;k.removeEventListener("dispose",Tn),Rn(k)}function Rn(w){mr(w),E.remove(w)}function mr(w){const k=E.get(w).programs;k!==void 0&&(k.forEach(function(W){Re.releaseProgram(W)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,H,z,me){k===null&&(k=xt);const Se=z.isMesh&&z.matrixWorld.determinant()<0,ve=yr(w,k,W,H,z);Pe.setMaterial(H,Se);let we=W.index,Le=1;if(H.wireframe===!0){if(we=De.getWireframeAttribute(W),we===void 0)return;Le=2}const Fe=W.drawRange,Ce=W.attributes.position;let We=Fe.start*Le,at=(Fe.start+Fe.count)*Le;me!==null&&(We=Math.max(We,me.start*Le),at=Math.min(at,(me.start+me.count)*Le)),we!==null?(We=Math.max(We,0),at=Math.min(at,we.count)):Ce!=null&&(We=Math.max(We,0),at=Math.min(at,Ce.count));const wt=at-We;if(wt<0||wt===1/0)return;ce.setup(z,H,ve,W,we);let Be,mt=V;if(we!==null&&(Be=j.get(we),mt=ge,mt.setIndex(Be)),z.isMesh)H.wireframe===!0?(Pe.setLineWidth(H.wireframeLinewidth*Ct()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(z.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),Pe.setLineWidth(Ne*Ct()),z.isLineSegments?mt.setMode(O.LINES):z.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else z.isPoints?mt.setMode(O.POINTS):z.isSprite&&mt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ws("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ne=z._multiDrawStarts,it=z._multiDrawCounts,lt=z._multiDrawCount,rn=we?j.get(we).bytesPerElement:1,_i=E.get(H).currentProgram.getUniforms();for(let fn=0;fn<lt;fn++)_i.setValue(O,"_gl_DrawID",fn),mt.render(Ne[fn]/rn,it[fn])}else if(z.isInstancedMesh)mt.renderInstances(We,wt,z.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,it=Math.min(W.instanceCount,Ne);mt.renderInstances(We,wt,it)}else mt.render(We,wt)};function hs(w,k,W){w.transparent===!0&&w.side===ii&&w.forceSinglePass===!1?(w.side=vn,w.needsUpdate=!0,xr(w,k,W),w.side=Vi,w.needsUpdate=!0,xr(w,k,W),w.side=ii):xr(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),U=he.get(W),U.init(k),S.push(U),W.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(U.pushLight(z),z.castShadow&&U.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(U.pushLight(z),z.castShadow&&U.pushShadow(z))}),U.setupLights();const H=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const ve=me[Se];hs(ve,W,z),H.add(ve)}else hs(me,W,z),H.add(me)}),U=S.pop(),H},this.compileAsync=function(w,k,W=null){const H=this.compile(w,k,W);return new Promise(z=>{function me(){if(H.forEach(function(Se){E.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){z(w);return}setTimeout(me,10)}ke.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let gr=null;function fs(w){gr&&gr(w)}function mi(){nn.stop()}function ao(){nn.start()}const nn=new Id;nn.setAnimationLoop(fs),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(w){gr=w,le.setAnimationLoop(w),w===null?nn.stop():nn.start()},le.addEventListener("sessionstart",mi),le.addEventListener("sessionend",ao),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;const W=le.enabled===!0&&le.isPresenting===!0,H=M!==null&&(A===null||W)&&M.begin(m,A);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,k,A),U=he.get(w,S.length),U.init(k),S.push(U),Dt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ge.setFromProjectionMatrix(Dt,Gn,k.reversedDepth),ot=this.localClippingEnabled,Ie=be.init(this.clippingPlanes,ot),L=se.get(w,F.length),L.init(),F.push(L),le.enabled===!0&&le.isPresenting===!0){const Se=m.xr.getDepthSensingMesh();Se!==null&&_r(Se,k,-1/0,m.sortObjects)}_r(w,k,0,m.sortObjects),L.finish(),m.sortObjects===!0&&L.sort(St,vt),$e=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,$e&&fe.addToRenderList(L,w),this.info.render.frame++,Ie===!0&&be.beginShadows();const z=U.state.shadowsArray;if(Me.render(z,w,k),Ie===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&M.hasRenderPass())===!1){const Se=L.opaque,ve=L.transmissive;if(U.setupLights(),k.isArrayCamera){const we=k.cameras;if(ve.length>0)for(let Le=0,Fe=we.length;Le<Fe;Le++){const Ce=we[Le];vr(Se,ve,w,Ce)}$e&&fe.render(w);for(let Le=0,Fe=we.length;Le<Fe;Le++){const Ce=we[Le];ds(L,w,Ce,Ce.viewport)}}else ve.length>0&&vr(Se,ve,w,k),$e&&fe.render(w),ds(L,w,k)}A!==null&&I===0&&(B.updateMultisampleRenderTarget(A),B.updateRenderTargetMipmap(A)),H&&M.end(m),w.isScene===!0&&w.onAfterRender(m,w,k),ce.resetDefaultState(),Y=-1,K=null,S.pop(),S.length>0?(U=S[S.length-1],Ie===!0&&be.setGlobalState(m.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function _r(w,k,W,H){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){H&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);const Se=pe.update(w),ve=w.material;ve.visible&&L.push(w,Se,ve,W,pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const Se=pe.update(w),ve=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),pt.copy(Se.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(ve)){const we=Se.groups;for(let Le=0,Fe=we.length;Le<Fe;Le++){const Ce=we[Le],We=ve[Ce.materialIndex];We&&We.visible&&L.push(w,Se,We,W,pt.z,Ce)}}else ve.visible&&L.push(w,Se,ve,W,pt.z,null)}}const me=w.children;for(let Se=0,ve=me.length;Se<ve;Se++)_r(me[Se],k,W,H)}function ds(w,k,W,H){const{opaque:z,transmissive:me,transparent:Se}=w;U.setupLightsView(W),Ie===!0&&be.setGlobalState(m.clippingPlanes,W),H&&Pe.viewport(Q.copy(H)),z.length>0&&gi(z,k,W),me.length>0&&gi(me,k,W),Se.length>0&&gi(Se,k,W),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function vr(w,k,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[H.id]===void 0){const We=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[H.id]=new Wn(1,1,{generateMipmaps:!0,type:We?li:wn,minFilter:sr,samples:_t.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const me=U.state.transmissionRenderTarget[H.id],Se=H.viewport||Q;me.setSize(Se.z*m.transmissionResolutionScale,Se.w*m.transmissionResolutionScale);const ve=m.getRenderTarget(),we=m.getActiveCubeFace(),Le=m.getActiveMipmapLevel();m.setRenderTarget(me),m.getClearColor(xe),_e=m.getClearAlpha(),_e<1&&m.setClearColor(16777215,.5),m.clear(),$e&&fe.render(W);const Fe=m.toneMapping;m.toneMapping=Hn;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),U.setupLightsView(H),Ie===!0&&be.setGlobalState(m.clippingPlanes,H),gi(w,W,H),B.updateMultisampleRenderTarget(me),B.updateRenderTargetMipmap(me),ke.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let at=0,wt=k.length;at<wt;at++){const Be=k[at],{object:mt,geometry:Ne,material:it,group:lt}=Be;if(it.side===ii&&mt.layers.test(H.layers)){const rn=it.side;it.side=vn,it.needsUpdate=!0,ps(mt,W,H,Ne,it,lt),it.side=rn,it.needsUpdate=!0,We=!0}}We===!0&&(B.updateMultisampleRenderTarget(me),B.updateRenderTargetMipmap(me))}m.setRenderTarget(ve,we,Le),m.setClearColor(xe,_e),Ce!==void 0&&(H.viewport=Ce),m.toneMapping=Fe}function gi(w,k,W){const H=k.isScene===!0?k.overrideMaterial:null;for(let z=0,me=w.length;z<me;z++){const Se=w[z],{object:ve,geometry:we,group:Le}=Se;let Fe=Se.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),ve.layers.test(W.layers)&&ps(ve,k,W,we,Fe,Le)}}function ps(w,k,W,H,z,me){w.onBeforeRender(m,k,W,H,z,me),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(m,k,W,H,w,me),z.transparent===!0&&z.side===ii&&z.forceSinglePass===!1?(z.side=vn,z.needsUpdate=!0,m.renderBufferDirect(W,k,H,z,w,me),z.side=Vi,z.needsUpdate=!0,m.renderBufferDirect(W,k,H,z,w,me),z.side=ii):m.renderBufferDirect(W,k,H,z,w,me),w.onAfterRender(m,k,W,H,z,me)}function xr(w,k,W){k.isScene!==!0&&(k=xt);const H=E.get(w),z=U.state.lights,me=U.state.shadowsArray,Se=z.state.version,ve=Re.getParameters(w,z.state,me,k,W),we=Re.getProgramCacheKey(ve);let Le=H.programs;H.environment=w.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(w.isMeshStandardMaterial?ne:J).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Tn),Le=new Map,H.programs=Le);let Fe=Le.get(we);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===Se)return lo(w,ve),Fe}else ve.uniforms=Re.getUniforms(w),w.onBeforeCompile(ve,m),Fe=Re.acquireProgram(ve,we),Le.set(we,Fe),H.uniforms=ve.uniforms;const Ce=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=be.uniform),lo(w,ve),H.needsLights=gs(w),H.lightsStateVersion=Se,H.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMap.value=z.state.directionalShadowMap,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotShadowMap.value=z.state.spotShadowMap,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMap.value=z.state.pointShadowMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function ms(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Yo.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function lo(w,k){const W=E.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function yr(w,k,W,H,z){k.isScene!==!0&&(k=xt),B.resetTextureUnits();const me=k.fog,Se=H.isMeshStandardMaterial?k.environment:null,ve=A===null?m.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qr,we=(H.isMeshStandardMaterial?ne:J).get(H.envMap||Se),Le=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!W.morphAttributes.position,We=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let wt=Hn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=m.toneMapping);const Be=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=Be!==void 0?Be.length:0,Ne=E.get(H),it=U.state.lights;if(Ie===!0&&(ot===!0||w!==K)){const jt=w===K&&H.id===Y;be.setState(H,w,jt)}let lt=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==it.state.version||Ne.outputColorSpace!==ve||z.isBatchedMesh&&Ne.batching===!1||!z.isBatchedMesh&&Ne.batching===!0||z.isBatchedMesh&&Ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ne.instancing===!1||!z.isInstancedMesh&&Ne.instancing===!0||z.isSkinnedMesh&&Ne.skinning===!1||!z.isSkinnedMesh&&Ne.skinning===!0||z.isInstancedMesh&&Ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ne.instancingMorph===!1&&z.morphTexture!==null||Ne.envMap!==we||H.fog===!0&&Ne.fog!==me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==be.numPlanes||Ne.numIntersection!==be.numIntersection)||Ne.vertexAlphas!==Le||Ne.vertexTangents!==Fe||Ne.morphTargets!==Ce||Ne.morphNormals!==We||Ne.morphColors!==at||Ne.toneMapping!==wt||Ne.morphTargetsCount!==mt)&&(lt=!0):(lt=!0,Ne.__version=H.version);let rn=Ne.currentProgram;lt===!0&&(rn=xr(H,k,z));let _i=!1,fn=!1,qi=!1;const Mt=rn.getUniforms(),Ft=Ne.uniforms;if(Pe.useProgram(rn.program)&&(_i=!0,fn=!0,qi=!0),H.id!==Y&&(Y=H.id,fn=!0),_i||K!==w){Pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(O,"projectionMatrix",w.projectionMatrix),Mt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Jt=Mt.map.cameraPosition;Jt!==void 0&&Jt.setValue(O,et.setFromMatrixPosition(w.matrixWorld)),_t.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,fn=!0,qi=!0)}if(Ne.needsLights&&(it.state.directionalShadowMap.length>0&&Mt.setValue(O,"directionalShadowMap",it.state.directionalShadowMap,B),it.state.spotShadowMap.length>0&&Mt.setValue(O,"spotShadowMap",it.state.spotShadowMap,B),it.state.pointShadowMap.length>0&&Mt.setValue(O,"pointShadowMap",it.state.pointShadowMap,B)),z.isSkinnedMesh){Mt.setOptional(O,z,"bindMatrix"),Mt.setOptional(O,z,"bindMatrixInverse");const jt=z.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Mt.setValue(O,"boneTexture",jt.boneTexture,B))}z.isBatchedMesh&&(Mt.setOptional(O,z,"batchingTexture"),Mt.setValue(O,"batchingTexture",z._matricesTexture,B),Mt.setOptional(O,z,"batchingIdTexture"),Mt.setValue(O,"batchingIdTexture",z._indirectTexture,B),Mt.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(O,"batchingColorTexture",z._colorsTexture,B));const Ot=W.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&He.update(z,W,rn),(fn||Ne.receiveShadow!==z.receiveShadow)&&(Ne.receiveShadow=z.receiveShadow,Mt.setValue(O,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ft.envMap.value=we,Ft.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&k.environment!==null&&(Ft.envMapIntensity.value=k.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=vy()),fn&&(Mt.setValue(O,"toneMappingExposure",m.toneMappingExposure),Ne.needsLights&&co(Ft,qi),me&&H.fog===!0&&Ve.refreshFogUniforms(Ft,me),Ve.refreshMaterialUniforms(Ft,H,Ye,Ke,U.state.transmissionRenderTarget[w.id]),Yo.upload(O,ms(Ne),Ft,B)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yo.upload(O,ms(Ne),Ft,B),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(O,"center",z.center),Mt.setValue(O,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(O,"normalMatrix",z.normalMatrix),Mt.setValue(O,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const jt=H.uniformsGroups;for(let Jt=0,Er=jt.length;Jt<Er;Jt++){const Nn=jt[Jt];oe.update(Nn,rn),oe.bind(Nn,rn)}}return rn}function co(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function gs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,k,W){const H=E.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=k,E.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const W=E.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Xi=O.createFramebuffer();this.setRenderTarget=function(w,k=0,W=0){A=w,T=k,I=W;let H=null,z=!1,me=!1;if(w){const ve=E.get(w);if(ve.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(O.FRAMEBUFFER,ve.__webglFramebuffer),Q.copy(w.viewport),q.copy(w.scissor),ie=w.scissorTest,Pe.viewport(Q),Pe.scissor(q),Pe.setScissorTest(ie),Y=-1;return}else if(ve.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(ve.__hasExternalTextures)B.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Fe=w.depthTexture;if(ve.__boundDepthTexture!==Fe){if(Fe!==null&&E.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(me=!0);const Le=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?H=Le[k][W]:H=Le[k],z=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?H=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[W]:H=Le,Q.copy(w.viewport),q.copy(w.scissor),ie=w.scissorTest}else Q.copy(Z).multiplyScalar(Ye).floor(),q.copy(re).multiplyScalar(Ye).floor(),ie=Te;if(W!==0&&(H=Xi),Pe.bindFramebuffer(O.FRAMEBUFFER,H)&&Pe.drawBuffers(w,H),Pe.viewport(Q),Pe.scissor(q),Pe.setScissorTest(ie),z){const ve=E.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,ve.__webglTexture,W)}else if(me){const ve=k;for(let we=0;we<w.textures.length;we++){const Le=E.get(w.textures[we]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+we,Le.__webglTexture,W,ve)}}else if(w!==null&&W!==0){const ve=E.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,W)}Y=-1},this.readRenderTargetPixels=function(w,k,W,H,z,me,Se,ve=0){if(!(w&&w.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Pe.bindFramebuffer(O.FRAMEBUFFER,we);try{const Le=w.textures[ve],Fe=Le.format,Ce=Le.type;if(!_t.textureFormatReadable(Fe)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ce)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-H&&W>=0&&W<=w.height-z&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),O.readPixels(k,W,H,z,ae.convert(Fe),ae.convert(Ce),me))}finally{const Le=A!==null?E.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,H,z,me,Se,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(k>=0&&k<=w.width-H&&W>=0&&W<=w.height-z){Pe.bindFramebuffer(O.FRAMEBUFFER,we);const Le=w.textures[ve],Fe=Le.format,Ce=Le.type;if(!_t.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),O.readPixels(k,W,H,z,ae.convert(Fe),ae.convert(Ce),0);const at=A!==null?E.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,at);const wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Gm(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(We),O.deleteSync(wt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,W=0){const H=Math.pow(2,-W),z=Math.floor(w.image.width*H),me=Math.floor(w.image.height*H),Se=k!==null?k.x:0,ve=k!==null?k.y:0;B.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,Se,ve,z,me),Pe.unbindTexture()};const Qn=O.createFramebuffer(),_s=O.createFramebuffer();this.copyTextureToTexture=function(w,k,W=null,H=null,z=0,me=null){me===null&&(z!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=z,z=0):me=0);let Se,ve,we,Le,Fe,Ce,We,at,wt;const Be=w.isCompressedTexture?w.mipmaps[me]:w.image;if(W!==null)Se=W.max.x-W.min.x,ve=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Fe=W.min.y,Ce=W.isBox3?W.min.z:0;else{const Ot=Math.pow(2,-z);Se=Math.floor(Be.width*Ot),ve=Math.floor(Be.height*Ot),w.isDataArrayTexture?we=Be.depth:w.isData3DTexture?we=Math.floor(Be.depth*Ot):we=1,Le=0,Fe=0,Ce=0}H!==null?(We=H.x,at=H.y,wt=H.z):(We=0,at=0,wt=0);const mt=ae.convert(k.format),Ne=ae.convert(k.type);let it;k.isData3DTexture?(B.setTexture3D(k,0),it=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(B.setTexture2DArray(k,0),it=O.TEXTURE_2D_ARRAY):(B.setTexture2D(k,0),it=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=O.getParameter(O.UNPACK_ROW_LENGTH),rn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_i=O.getParameter(O.UNPACK_SKIP_PIXELS),fn=O.getParameter(O.UNPACK_SKIP_ROWS),qi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Be.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Be.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Le),O.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ce);const Mt=w.isDataArrayTexture||w.isData3DTexture,Ft=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const Ot=E.get(w),jt=E.get(k),Jt=E.get(Ot.__renderTarget),Er=E.get(jt.__renderTarget);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Nn=0;Nn<we;Nn++)Mt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(w).__webglTexture,z,Ce+Nn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,E.get(k).__webglTexture,me,wt+Nn)),O.blitFramebuffer(Le,Fe,Se,ve,We,at,Se,ve,O.DEPTH_BUFFER_BIT,O.NEAREST);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||E.has(w)){const Ot=E.get(w),jt=E.get(k);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,Qn),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,_s);for(let Jt=0;Jt<we;Jt++)Mt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.__webglTexture,z,Ce+Jt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,z),Ft?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,jt.__webglTexture,me,wt+Jt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,jt.__webglTexture,me),z!==0?O.blitFramebuffer(Le,Fe,Se,ve,We,at,Se,ve,O.COLOR_BUFFER_BIT,O.NEAREST):Ft?O.copyTexSubImage3D(it,me,We,at,wt+Jt,Le,Fe,Se,ve):O.copyTexSubImage2D(it,me,We,at,Le,Fe,Se,ve);Pe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ft?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(it,me,We,at,wt,Se,ve,we,mt,Ne,Be.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(it,me,We,at,wt,Se,ve,we,mt,Be.data):O.texSubImage3D(it,me,We,at,wt,Se,ve,we,mt,Ne,Be):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,We,at,Se,ve,mt,Ne,Be.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,We,at,Be.width,Be.height,mt,Be.data):O.texSubImage2D(O.TEXTURE_2D,me,We,at,Se,ve,mt,Ne,Be);O.pixelStorei(O.UNPACK_ROW_LENGTH,lt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_i),O.pixelStorei(O.UNPACK_SKIP_ROWS,fn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qi),me===0&&k.generateMipmaps&&O.generateMipmap(it),Pe.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){T=0,I=0,A=null,Pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Ud=new pg;Ud.background=new Et(15650669);const yy=new bn(55,window.innerWidth/window.innerHeight,.1,1e3),ya=new xy;ya.setSize(window.innerWidth,window.innerHeight);ya.setAnimationLoop(Sy);const Ey=document.getElementById("3js-env");Ey.appendChild(ya.domElement);function Sy(){ya.render(Ud,yy)}const Ty=()=>{};var Xh={};const Fd=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},My=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[t++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[t++],o=i[t++],l=i[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=i[t++],o=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,l=o?i[r+1]:0,c=r+2<i.length,u=c?i[r+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let p=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),n.push(t[h],t[d],t[p],t[v])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Fd(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):My(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=t[i.charAt(r++)],l=r<i.length?t[i.charAt(r)]:0;++r;const u=r<i.length?t[i.charAt(r)]:64;++r;const d=r<i.length?t[i.charAt(r)]:64;if(++r,s==null||l==null||u==null||d==null)throw new Ay;const p=s<<2|l>>4;if(n.push(p),u!==64){const v=l<<4&240|u>>2;if(n.push(v),d!==64){const b=u<<6&192|d;n.push(b)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Ay extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const by=function(i){const e=Fd(i);return Od.encodeByteArray(e,!0)},ra=function(i){return by(i).replace(/\./g,"")},wy=function(i){try{return Od.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ry(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const Cy=()=>Ry().__FIREBASE_DEFAULTS__,Iy=()=>{if(typeof process>"u"||typeof Xh>"u")return;const i=Xh.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Py=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&wy(i[1]);return e&&JSON.parse(e)},nu=()=>{try{return Ty()||Cy()||Iy()||Py()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Dy=i=>nu()?.emulatorHosts?.[i],Ly=i=>{const e=Dy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Vd=()=>nu()?.config;class Ny{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}function iu(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Uy(i){return(await fetch(i,{credentials:"include"})).ok}function Fy(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...i};return[ra(JSON.stringify(t)),ra(JSON.stringify(o)),""].join(".")}const Fs={};function Oy(){const i={prod:[],emulator:[]};for(const e of Object.keys(Fs))Fs[e]?i.emulator.push(e):i.prod.push(e);return i}function Vy(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let qh=!1;function By(i,e){if(typeof window>"u"||typeof document>"u"||!iu(window.location.host)||Fs[i]===e||Fs[i]||qh)return;Fs[i]=e;function t(p){return`__firebase__banner__${p}`}const n="__firebase__banner",s=Oy().prod.length>0;function o(){const p=document.getElementById(n);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,v){p.setAttribute("width","24"),p.setAttribute("id",v),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{qh=!0,o()},p}function h(p,v){p.setAttribute("id",v),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=Vy(n),v=t("text"),b=document.getElementById(v)||document.createElement("span"),R=t("learnmore"),y=document.getElementById(R)||document.createElement("a"),g=t("preprendIcon"),D=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const N=p.element;l(N),h(y,R);const L=u();c(D,g),N.append(D,b,y,L),document.body.appendChild(N)}s?(b.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}function ky(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zy(){const i=nu()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gy(){return!zy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hy(){try{return typeof indexedDB=="object"}catch{return!1}}function Wy(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}const Xy="FirebaseError";class as extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Xy,Object.setPrototypeOf(this,as.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bd.prototype.create)}}class Bd{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?qy(s,n):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new as(r,l,n)}}function qy(i,e){return i.replace($y,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const $y=/\{\$([^}]+)}/g;function sa(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const s=i[r],o=e[r];if($h(s)&&$h(o)){if(!sa(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function $h(i){return i!==null&&typeof i=="object"}function ru(i){return i&&i._delegate?i._delegate:i}class qs{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const nr="[DEFAULT]";class jy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ny;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ky(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Yy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yy(i){return i===nr?void 0:i}function Ky(i){return i.instantiationMode==="EAGER"}class Qy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}var ut;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ut||(ut={}));const Jy={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},Zy=ut.INFO,eE={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},tE=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=eE[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=Zy,this._logHandler=tE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...e),this._logHandler(this,ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...e),this._logHandler(this,ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...e),this._logHandler(this,ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...e),this._logHandler(this,ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...e),this._logHandler(this,ut.ERROR,...e)}}const nE=(i,e)=>e.some(t=>i instanceof t);let jh,Yh;function iE(){return jh||(jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rE(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zd=new WeakMap,yc=new WeakMap,Gd=new WeakMap,gl=new WeakMap,su=new WeakMap;function sE(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{t(Di(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zd.set(t,i)}).catch(()=>{}),su.set(e,i),e}function oE(i){if(yc.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});yc.set(i,e)}let Ec={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return yc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Gd.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Di(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aE(i){Ec=i(Ec)}function lE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(_l(this),e,...t);return Gd.set(n,e.sort?e.sort():[e]),Di(n)}:rE().includes(i)?function(...e){return i.apply(_l(this),e),Di(zd.get(this))}:function(...e){return Di(i.apply(_l(this),e))}}function cE(i){return typeof i=="function"?lE(i):(i instanceof IDBTransaction&&oE(i),nE(i,iE())?new Proxy(i,Ec):i)}function Di(i){if(i instanceof IDBRequest)return sE(i);if(gl.has(i))return gl.get(i);const e=cE(i);return e!==i&&(gl.set(i,e),su.set(e,i)),e}const _l=i=>su.get(i);function uE(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,e),l=Di(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Di(o.result),c.oldVersion,c.newVersion,Di(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const hE=["get","getKey","getAll","getAllKeys","count"],fE=["put","add","delete","clear"],vl=new Map;function Kh(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(vl.get(e))return vl.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=fE.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||hE.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),r&&c.done]))[0]};return vl.set(e,s),s}aE(i=>({...i,get:(e,t,n)=>Kh(e,t)||i.get(e,t,n),has:(e,t)=>!!Kh(e,t)||i.has(e,t)}));class dE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pE(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function pE(i){return i.getComponent()?.type==="VERSION"}const Sc="@firebase/app",Qh="0.14.8";const fi=new kd("@firebase/app"),mE="@firebase/app-compat",gE="@firebase/analytics-compat",_E="@firebase/analytics",vE="@firebase/app-check-compat",xE="@firebase/app-check",yE="@firebase/auth",EE="@firebase/auth-compat",SE="@firebase/database",TE="@firebase/data-connect",ME="@firebase/database-compat",AE="@firebase/functions",bE="@firebase/functions-compat",wE="@firebase/installations",RE="@firebase/installations-compat",CE="@firebase/messaging",IE="@firebase/messaging-compat",PE="@firebase/performance",DE="@firebase/performance-compat",LE="@firebase/remote-config",NE="@firebase/remote-config-compat",UE="@firebase/storage",FE="@firebase/storage-compat",OE="@firebase/firestore",VE="@firebase/ai",BE="@firebase/firestore-compat",kE="firebase",zE="12.9.0";const Tc="[DEFAULT]",GE={[Sc]:"fire-core",[mE]:"fire-core-compat",[_E]:"fire-analytics",[gE]:"fire-analytics-compat",[xE]:"fire-app-check",[vE]:"fire-app-check-compat",[yE]:"fire-auth",[EE]:"fire-auth-compat",[SE]:"fire-rtdb",[TE]:"fire-data-connect",[ME]:"fire-rtdb-compat",[AE]:"fire-fn",[bE]:"fire-fn-compat",[wE]:"fire-iid",[RE]:"fire-iid-compat",[CE]:"fire-fcm",[IE]:"fire-fcm-compat",[PE]:"fire-perf",[DE]:"fire-perf-compat",[LE]:"fire-rc",[NE]:"fire-rc-compat",[UE]:"fire-gcs",[FE]:"fire-gcs-compat",[OE]:"fire-fst",[BE]:"fire-fst-compat",[VE]:"fire-vertex","fire-js":"fire-js",[kE]:"fire-js-all"};const oa=new Map,HE=new Map,Mc=new Map;function Jh(i,e){try{i.container.addComponent(e)}catch(t){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function aa(i){const e=i.name;if(Mc.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,i);for(const t of oa.values())Jh(t,i);for(const t of HE.values())Jh(t,i);return!0}function WE(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function XE(i){return i==null?!1:i.settings!==void 0}const qE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Li=new Bd("app","Firebase",qE);class $E{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Li.create("app-deleted",{appName:this._name})}}const jE=zE;function Hd(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n={name:Tc,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw Li.create("bad-app-name",{appName:String(r)});if(t||(t=Vd()),!t)throw Li.create("no-options");const s=oa.get(r);if(s){if(sa(t,s.options)&&sa(n,s.config))return s;throw Li.create("duplicate-app",{appName:r})}const o=new Qy(r);for(const c of Mc.values())o.addComponent(c);const l=new $E(t,n,o);return oa.set(r,l),l}function YE(i=Tc){const e=oa.get(i);if(!e&&i===Tc&&Vd())return Hd();if(!e)throw Li.create("no-app",{appName:i});return e}function Wr(i,e,t){let n=GE[i]??i;t&&(n+=`-${t}`);const r=n.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(o.join(" "));return}aa(new qs(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}const KE="firebase-heartbeat-database",QE=1,$s="firebase-heartbeat-store";let xl=null;function Wd(){return xl||(xl=uE(KE,QE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore($s)}catch(t){console.warn(t)}}}}).catch(i=>{throw Li.create("idb-open",{originalErrorMessage:i.message})})),xl}async function JE(i){try{const t=(await Wd()).transaction($s),n=await t.objectStore($s).get(Xd(i));return await t.done,n}catch(e){if(e instanceof as)fi.warn(e.message);else{const t=Li.create("idb-get",{originalErrorMessage:e?.message});fi.warn(t.message)}}}async function Zh(i,e){try{const n=(await Wd()).transaction($s,"readwrite");await n.objectStore($s).put(e,Xd(i)),await n.done}catch(t){if(t instanceof as)fi.warn(t.message);else{const n=Li.create("idb-set",{originalErrorMessage:t?.message});fi.warn(n.message)}}}function Xd(i){return`${i.name}!${i.options.appId}`}const ZE=1024,eS=30;class tS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iS(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=ef();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>eS){const r=rS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){fi.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ef(),{heartbeatsToSend:t,unsentEntries:n}=nS(this._heartbeatsCache.heartbeats),r=ra(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return fi.warn(e),""}}}function ef(){return new Date().toISOString().substring(0,10)}function nS(i,e=ZE){const t=[];let n=i.slice();for(const r of i){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),tf(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),tf(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class iS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hy()?Wy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await JE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function tf(i){return ra(JSON.stringify({version:2,heartbeats:i})).length}function rS(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}function sS(i){aa(new qs("platform-logger",e=>new dE(e),"PRIVATE")),aa(new qs("heartbeat",e=>new tS(e),"PRIVATE")),Wr(Sc,Qh,i),Wr(Sc,Qh,"esm2020"),Wr("fire-js","")}sS("");var oS="firebase",aS="12.9.0";Wr(oS,aS,"app");var nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var Ni,qd;(function(){var i;function e(S,M){function m(){}m.prototype=M.prototype,S.F=M.prototype,S.prototype=new m,S.prototype.constructor=S,S.D=function(x,T,I){for(var A=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)A[Y-2]=arguments[Y];return M.prototype[T].apply(x,A)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,M,m){m||(m=0);const x=Array(16);if(typeof M=="string")for(var T=0;T<16;++T)x[T]=M.charCodeAt(m++)|M.charCodeAt(m++)<<8|M.charCodeAt(m++)<<16|M.charCodeAt(m++)<<24;else for(T=0;T<16;++T)x[T]=M[m++]|M[m++]<<8|M[m++]<<16|M[m++]<<24;M=S.g[0],m=S.g[1],T=S.g[2];let I=S.g[3],A;A=M+(I^m&(T^I))+x[0]+3614090360&4294967295,M=m+(A<<7&4294967295|A>>>25),A=I+(T^M&(m^T))+x[1]+3905402710&4294967295,I=M+(A<<12&4294967295|A>>>20),A=T+(m^I&(M^m))+x[2]+606105819&4294967295,T=I+(A<<17&4294967295|A>>>15),A=m+(M^T&(I^M))+x[3]+3250441966&4294967295,m=T+(A<<22&4294967295|A>>>10),A=M+(I^m&(T^I))+x[4]+4118548399&4294967295,M=m+(A<<7&4294967295|A>>>25),A=I+(T^M&(m^T))+x[5]+1200080426&4294967295,I=M+(A<<12&4294967295|A>>>20),A=T+(m^I&(M^m))+x[6]+2821735955&4294967295,T=I+(A<<17&4294967295|A>>>15),A=m+(M^T&(I^M))+x[7]+4249261313&4294967295,m=T+(A<<22&4294967295|A>>>10),A=M+(I^m&(T^I))+x[8]+1770035416&4294967295,M=m+(A<<7&4294967295|A>>>25),A=I+(T^M&(m^T))+x[9]+2336552879&4294967295,I=M+(A<<12&4294967295|A>>>20),A=T+(m^I&(M^m))+x[10]+4294925233&4294967295,T=I+(A<<17&4294967295|A>>>15),A=m+(M^T&(I^M))+x[11]+2304563134&4294967295,m=T+(A<<22&4294967295|A>>>10),A=M+(I^m&(T^I))+x[12]+1804603682&4294967295,M=m+(A<<7&4294967295|A>>>25),A=I+(T^M&(m^T))+x[13]+4254626195&4294967295,I=M+(A<<12&4294967295|A>>>20),A=T+(m^I&(M^m))+x[14]+2792965006&4294967295,T=I+(A<<17&4294967295|A>>>15),A=m+(M^T&(I^M))+x[15]+1236535329&4294967295,m=T+(A<<22&4294967295|A>>>10),A=M+(T^I&(m^T))+x[1]+4129170786&4294967295,M=m+(A<<5&4294967295|A>>>27),A=I+(m^T&(M^m))+x[6]+3225465664&4294967295,I=M+(A<<9&4294967295|A>>>23),A=T+(M^m&(I^M))+x[11]+643717713&4294967295,T=I+(A<<14&4294967295|A>>>18),A=m+(I^M&(T^I))+x[0]+3921069994&4294967295,m=T+(A<<20&4294967295|A>>>12),A=M+(T^I&(m^T))+x[5]+3593408605&4294967295,M=m+(A<<5&4294967295|A>>>27),A=I+(m^T&(M^m))+x[10]+38016083&4294967295,I=M+(A<<9&4294967295|A>>>23),A=T+(M^m&(I^M))+x[15]+3634488961&4294967295,T=I+(A<<14&4294967295|A>>>18),A=m+(I^M&(T^I))+x[4]+3889429448&4294967295,m=T+(A<<20&4294967295|A>>>12),A=M+(T^I&(m^T))+x[9]+568446438&4294967295,M=m+(A<<5&4294967295|A>>>27),A=I+(m^T&(M^m))+x[14]+3275163606&4294967295,I=M+(A<<9&4294967295|A>>>23),A=T+(M^m&(I^M))+x[3]+4107603335&4294967295,T=I+(A<<14&4294967295|A>>>18),A=m+(I^M&(T^I))+x[8]+1163531501&4294967295,m=T+(A<<20&4294967295|A>>>12),A=M+(T^I&(m^T))+x[13]+2850285829&4294967295,M=m+(A<<5&4294967295|A>>>27),A=I+(m^T&(M^m))+x[2]+4243563512&4294967295,I=M+(A<<9&4294967295|A>>>23),A=T+(M^m&(I^M))+x[7]+1735328473&4294967295,T=I+(A<<14&4294967295|A>>>18),A=m+(I^M&(T^I))+x[12]+2368359562&4294967295,m=T+(A<<20&4294967295|A>>>12),A=M+(m^T^I)+x[5]+4294588738&4294967295,M=m+(A<<4&4294967295|A>>>28),A=I+(M^m^T)+x[8]+2272392833&4294967295,I=M+(A<<11&4294967295|A>>>21),A=T+(I^M^m)+x[11]+1839030562&4294967295,T=I+(A<<16&4294967295|A>>>16),A=m+(T^I^M)+x[14]+4259657740&4294967295,m=T+(A<<23&4294967295|A>>>9),A=M+(m^T^I)+x[1]+2763975236&4294967295,M=m+(A<<4&4294967295|A>>>28),A=I+(M^m^T)+x[4]+1272893353&4294967295,I=M+(A<<11&4294967295|A>>>21),A=T+(I^M^m)+x[7]+4139469664&4294967295,T=I+(A<<16&4294967295|A>>>16),A=m+(T^I^M)+x[10]+3200236656&4294967295,m=T+(A<<23&4294967295|A>>>9),A=M+(m^T^I)+x[13]+681279174&4294967295,M=m+(A<<4&4294967295|A>>>28),A=I+(M^m^T)+x[0]+3936430074&4294967295,I=M+(A<<11&4294967295|A>>>21),A=T+(I^M^m)+x[3]+3572445317&4294967295,T=I+(A<<16&4294967295|A>>>16),A=m+(T^I^M)+x[6]+76029189&4294967295,m=T+(A<<23&4294967295|A>>>9),A=M+(m^T^I)+x[9]+3654602809&4294967295,M=m+(A<<4&4294967295|A>>>28),A=I+(M^m^T)+x[12]+3873151461&4294967295,I=M+(A<<11&4294967295|A>>>21),A=T+(I^M^m)+x[15]+530742520&4294967295,T=I+(A<<16&4294967295|A>>>16),A=m+(T^I^M)+x[2]+3299628645&4294967295,m=T+(A<<23&4294967295|A>>>9),A=M+(T^(m|~I))+x[0]+4096336452&4294967295,M=m+(A<<6&4294967295|A>>>26),A=I+(m^(M|~T))+x[7]+1126891415&4294967295,I=M+(A<<10&4294967295|A>>>22),A=T+(M^(I|~m))+x[14]+2878612391&4294967295,T=I+(A<<15&4294967295|A>>>17),A=m+(I^(T|~M))+x[5]+4237533241&4294967295,m=T+(A<<21&4294967295|A>>>11),A=M+(T^(m|~I))+x[12]+1700485571&4294967295,M=m+(A<<6&4294967295|A>>>26),A=I+(m^(M|~T))+x[3]+2399980690&4294967295,I=M+(A<<10&4294967295|A>>>22),A=T+(M^(I|~m))+x[10]+4293915773&4294967295,T=I+(A<<15&4294967295|A>>>17),A=m+(I^(T|~M))+x[1]+2240044497&4294967295,m=T+(A<<21&4294967295|A>>>11),A=M+(T^(m|~I))+x[8]+1873313359&4294967295,M=m+(A<<6&4294967295|A>>>26),A=I+(m^(M|~T))+x[15]+4264355552&4294967295,I=M+(A<<10&4294967295|A>>>22),A=T+(M^(I|~m))+x[6]+2734768916&4294967295,T=I+(A<<15&4294967295|A>>>17),A=m+(I^(T|~M))+x[13]+1309151649&4294967295,m=T+(A<<21&4294967295|A>>>11),A=M+(T^(m|~I))+x[4]+4149444226&4294967295,M=m+(A<<6&4294967295|A>>>26),A=I+(m^(M|~T))+x[11]+3174756917&4294967295,I=M+(A<<10&4294967295|A>>>22),A=T+(M^(I|~m))+x[2]+718787259&4294967295,T=I+(A<<15&4294967295|A>>>17),A=m+(I^(T|~M))+x[9]+3951481745&4294967295,S.g[0]=S.g[0]+M&4294967295,S.g[1]=S.g[1]+(T+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+T&4294967295,S.g[3]=S.g[3]+I&4294967295}n.prototype.v=function(S,M){M===void 0&&(M=S.length);const m=M-this.blockSize,x=this.C;let T=this.h,I=0;for(;I<M;){if(T==0)for(;I<=m;)r(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<M;)if(x[T++]=S.charCodeAt(I++),T==this.blockSize){r(this,x),T=0;break}}else for(;I<M;)if(x[T++]=S[I++],T==this.blockSize){r(this,x),T=0;break}}this.h=T,this.o+=M},n.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var M=1;M<S.length-8;++M)S[M]=0;M=this.o*8;for(var m=S.length-8;m<S.length;++m)S[m]=M&255,M/=256;for(this.v(S),S=Array(16),M=0,m=0;m<4;++m)for(let x=0;x<32;x+=8)S[M++]=this.g[m]>>>x&255;return S};function s(S,M){var m=l;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=M(S)}function o(S,M){this.h=M;const m=[];let x=!0;for(let T=S.length-1;T>=0;T--){const I=S[T]|0;x&&I==M||(m[T]=I,x=!1)}this.g=m}var l={};function c(S){return-128<=S&&S<128?s(S,function(M){return new o([M|0],M<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return d;if(S<0)return y(u(-S));const M=[];let m=1;for(let x=0;S>=m;x++)M[x]=S/m|0,m*=4294967296;return new o(M,0)}function h(S,M){if(S.length==0)throw Error("number format error: empty string");if(M=M||10,M<2||36<M)throw Error("radix out of range: "+M);if(S.charAt(0)=="-")return y(h(S.substring(1),M));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=u(Math.pow(M,8));let x=d;for(let I=0;I<S.length;I+=8){var T=Math.min(8,S.length-I);const A=parseInt(S.substring(I,I+T),M);T<8?(T=u(Math.pow(M,T)),x=x.j(T).add(u(A))):(x=x.j(m),x=x.add(u(A)))}return x}var d=c(0),p=c(1),v=c(16777216);i=o.prototype,i.m=function(){if(R(this))return-y(this).m();let S=0,M=1;for(let m=0;m<this.g.length;m++){const x=this.i(m);S+=(x>=0?x:4294967296+x)*M,M*=4294967296}return S},i.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(b(this))return"0";if(R(this))return"-"+y(this).toString(S);const M=u(Math.pow(S,6));var m=this;let x="";for(;;){const T=L(m,M).g;m=g(m,T.j(M));let I=((m.g.length>0?m.g[0]:m.h)>>>0).toString(S);if(m=T,b(m))return I+x;for(;I.length<6;)I="0"+I;x=I+x}},i.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function b(S){if(S.h!=0)return!1;for(let M=0;M<S.g.length;M++)if(S.g[M]!=0)return!1;return!0}function R(S){return S.h==-1}i.l=function(S){return S=g(this,S),R(S)?-1:b(S)?0:1};function y(S){const M=S.g.length,m=[];for(let x=0;x<M;x++)m[x]=~S.g[x];return new o(m,~S.h).add(p)}i.abs=function(){return R(this)?y(this):this},i.add=function(S){const M=Math.max(this.g.length,S.g.length),m=[];let x=0;for(let T=0;T<=M;T++){let I=x+(this.i(T)&65535)+(S.i(T)&65535),A=(I>>>16)+(this.i(T)>>>16)+(S.i(T)>>>16);x=A>>>16,I&=65535,A&=65535,m[T]=A<<16|I}return new o(m,m[m.length-1]&-2147483648?-1:0)};function g(S,M){return S.add(y(M))}i.j=function(S){if(b(this)||b(S))return d;if(R(this))return R(S)?y(this).j(y(S)):y(y(this).j(S));if(R(S))return y(this.j(y(S)));if(this.l(v)<0&&S.l(v)<0)return u(this.m()*S.m());const M=this.g.length+S.g.length,m=[];for(var x=0;x<2*M;x++)m[x]=0;for(x=0;x<this.g.length;x++)for(let T=0;T<S.g.length;T++){const I=this.i(x)>>>16,A=this.i(x)&65535,Y=S.i(T)>>>16,K=S.i(T)&65535;m[2*x+2*T]+=A*K,D(m,2*x+2*T),m[2*x+2*T+1]+=I*K,D(m,2*x+2*T+1),m[2*x+2*T+1]+=A*Y,D(m,2*x+2*T+1),m[2*x+2*T+2]+=I*Y,D(m,2*x+2*T+2)}for(S=0;S<M;S++)m[S]=m[2*S+1]<<16|m[2*S];for(S=M;S<2*M;S++)m[S]=0;return new o(m,0)};function D(S,M){for(;(S[M]&65535)!=S[M];)S[M+1]+=S[M]>>>16,S[M]&=65535,M++}function N(S,M){this.g=S,this.h=M}function L(S,M){if(b(M))throw Error("division by zero");if(b(S))return new N(d,d);if(R(S))return M=L(y(S),M),new N(y(M.g),y(M.h));if(R(M))return M=L(S,y(M)),new N(y(M.g),M.h);if(S.g.length>30){if(R(S)||R(M))throw Error("slowDivide_ only works with positive integers.");for(var m=p,x=M;x.l(S)<=0;)m=U(m),x=U(x);var T=F(m,1),I=F(x,1);for(x=F(x,2),m=F(m,2);!b(x);){var A=I.add(x);A.l(S)<=0&&(T=T.add(m),I=A),x=F(x,1),m=F(m,1)}return M=g(S,T.j(M)),new N(T,M)}for(T=d;S.l(M)>=0;){for(m=Math.max(1,Math.floor(S.m()/M.m())),x=Math.ceil(Math.log(m)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),I=u(m),A=I.j(M);R(A)||A.l(S)>0;)m-=x,I=u(m),A=I.j(M);b(I)&&(I=p),T=T.add(I),S=g(S,A)}return new N(T,S)}i.B=function(S){return L(this,S).h},i.and=function(S){const M=Math.max(this.g.length,S.g.length),m=[];for(let x=0;x<M;x++)m[x]=this.i(x)&S.i(x);return new o(m,this.h&S.h)},i.or=function(S){const M=Math.max(this.g.length,S.g.length),m=[];for(let x=0;x<M;x++)m[x]=this.i(x)|S.i(x);return new o(m,this.h|S.h)},i.xor=function(S){const M=Math.max(this.g.length,S.g.length),m=[];for(let x=0;x<M;x++)m[x]=this.i(x)^S.i(x);return new o(m,this.h^S.h)};function U(S){const M=S.g.length+1,m=[];for(let x=0;x<M;x++)m[x]=S.i(x)<<1|S.i(x-1)>>>31;return new o(m,S.h)}function F(S,M){const m=M>>5;M%=32;const x=S.g.length-m,T=[];for(let I=0;I<x;I++)T[I]=M>0?S.i(I+m)>>>M|S.i(I+m+1)<<32-M:S.i(I+m);return new o(T,S.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,qd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ni=o}).apply(typeof nf<"u"?nf:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var $d,Ds,jd,Ko,Ac,Yd,Kd,Qd;(function(){var i,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var f=0;f<a.length;++f){var _=a[f];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var n=t(this);function r(a,f){if(f)e:{var _=n;a=a.split(".");for(var C=0;C<a.length-1;C++){var G=a[C];if(!(G in _))break e;_=_[G]}a=a[a.length-1],C=_[a],f=f(C),f!=C&&f!=null&&e(_,a,{configurable:!0,writable:!0,value:f})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(f){var _=[],C;for(C in f)Object.prototype.hasOwnProperty.call(f,C)&&_.push([C,f[C]]);return _}});var s=s||{},o=this||self;function l(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function c(a,f,_){return a.call.apply(a.bind,arguments)}function u(a,f,_){return u=c,u.apply(null,arguments)}function h(a,f){var _=Array.prototype.slice.call(arguments,1);return function(){var C=_.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function d(a,f){function _(){}_.prototype=f.prototype,a.Z=f.prototype,a.prototype=new _,a.prototype.constructor=a,a.Ob=function(C,G,$){for(var de=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)de[Je-2]=arguments[Je];return f.prototype[G].apply(C,de)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const f=a.length;if(f>0){const _=Array(f);for(let C=0;C<f;C++)_[C]=a[C];return _}return[]}function b(a,f){for(let C=1;C<arguments.length;C++){const G=arguments[C];var _=typeof G;if(_=_!="object"?_:G?Array.isArray(G)?"array":_:"null",_=="array"||_=="object"&&typeof G.length=="number"){_=a.length||0;const $=G.length||0;a.length=_+$;for(let de=0;de<$;de++)a[_+de]=G[de]}else a.push(G)}}class R{constructor(f,_){this.i=f,this.j=_,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(a){o.setTimeout(()=>{throw a},0)}function g(){var a=S;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class D{constructor(){this.h=this.g=null}add(f,_){const C=N.get();C.set(f,_),this.h?this.h.next=C:this.g=C,this.h=C}}var N=new R(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(f,_){this.h=f,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let U,F=!1,S=new D,M=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(m)}};function m(){for(var a;a=g();){try{a.h.call(a.g)}catch(_){y(_)}var f=N;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}F=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const _=()=>{};o.addEventListener("test",_,f),o.removeEventListener("test",_,f)}catch{}return a})();function A(a){return/^[\s\xa0]*$/.test(a)}function Y(a,f){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}d(Y,T),Y.prototype.init=function(a,f){const _=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(_=="mouseover"?f=a.fromElement:_=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var K="closure_listenable_"+(Math.random()*1e6|0),Q=0;function q(a,f,_,C,G){this.listener=a,this.proxy=null,this.src=f,this.type=_,this.capture=!!C,this.ha=G,this.key=++Q,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xe(a,f,_){for(const C in a)f.call(_,a[C],C,a)}function _e(a,f){for(const _ in a)f.call(void 0,a[_],_,a)}function Ee(a){const f={};for(const _ in a)f[_]=a[_];return f}const Ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ye(a,f){let _,C;for(let G=1;G<arguments.length;G++){C=arguments[G];for(_ in C)a[_]=C[_];for(let $=0;$<Ke.length;$++)_=Ke[$],Object.prototype.hasOwnProperty.call(C,_)&&(a[_]=C[_])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,f,_,C,G){const $=a.toString();a=this.g[$],a||(a=this.g[$]=[],this.h++);const de=Z(a,f,C,G);return de>-1?(f=a[de],_||(f.fa=!1)):(f=new q(f,this.src,$,!!C,G),f.fa=_,a.push(f)),f};function vt(a,f){const _=f.type;if(_ in a.g){var C=a.g[_],G=Array.prototype.indexOf.call(C,f,void 0),$;($=G>=0)&&Array.prototype.splice.call(C,G,1),$&&(ie(f),a.g[_].length==0&&(delete a.g[_],a.h--))}}function Z(a,f,_,C){for(let G=0;G<a.length;++G){const $=a[G];if(!$.da&&$.listener==f&&$.capture==!!_&&$.ha==C)return G}return-1}var re="closure_lm_"+(Math.random()*1e6|0),Te={};function Ge(a,f,_,C,G){if(Array.isArray(f)){for(let $=0;$<f.length;$++)Ge(a,f[$],_,C,G);return null}return _=O(_),a&&a[K]?a.J(f,_,l(C)?!!C.capture:!1,G):Ie(a,f,_,!1,C,G)}function Ie(a,f,_,C,G,$){if(!f)throw Error("Invalid event type");const de=l(G)?!!G.capture:!!G;let Je=$e(a);if(Je||(a[re]=Je=new St(a)),_=Je.add(f,_,C,de,$),_.proxy)return _;if(C=ot(),_.proxy=C,C.src=a,C.listener=_,a.addEventListener)I||(G=de),G===void 0&&(G=!1),a.addEventListener(f.toString(),C,G);else if(a.attachEvent)a.attachEvent(pt(f.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ot(){function a(_){return f.call(a.src,a.listener,_)}const f=xt;return a}function Dt(a,f,_,C,G){if(Array.isArray(f))for(var $=0;$<f.length;$++)Dt(a,f[$],_,C,G);else C=l(C)?!!C.capture:!!C,_=O(_),a&&a[K]?(a=a.i,$=String(f).toString(),$ in a.g&&(f=a.g[$],_=Z(f,_,C,G),_>-1&&(ie(f[_]),Array.prototype.splice.call(f,_,1),f.length==0&&(delete a.g[$],a.h--)))):a&&(a=$e(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Z(f,_,C,G)),(_=a>-1?f[a]:null)&&et(_))}function et(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[K])vt(f.i,a);else{var _=a.type,C=a.proxy;f.removeEventListener?f.removeEventListener(_,C,a.capture):f.detachEvent?f.detachEvent(pt(_),C):f.addListener&&f.removeListener&&f.removeListener(C),(_=$e(f))?(vt(_,a),_.h==0&&(_.src=null,f[re]=null)):ie(a)}}}function pt(a){return a in Te?Te[a]:Te[a]="on"+a}function xt(a,f){if(a.da)a=!0;else{f=new Y(f,this);const _=a.listener,C=a.ha||a.src;a.fa&&et(a),a=_.call(C,f)}return a}function $e(a){return a=a[re],a instanceof St?a:null}var Ct="__closure_events_fn_"+(Math.random()*1e9>>>0);function O(a){return typeof a=="function"?a:(a[Ct]||(a[Ct]=function(f){return a.handleEvent(f)}),a[Ct])}function tt(){x.call(this),this.i=new St(this),this.M=this,this.G=null}d(tt,x),tt.prototype[K]=!0,tt.prototype.removeEventListener=function(a,f,_,C){Dt(this,a,f,_,C)};function ke(a,f){var _,C=a.G;if(C)for(_=[];C;C=C.G)_.push(C);if(a=a.M,C=f.type||f,typeof f=="string")f=new T(f,a);else if(f instanceof T)f.target=f.target||a;else{var G=f;f=new T(C,a),Ye(f,G)}G=!0;let $,de;if(_)for(de=_.length-1;de>=0;de--)$=f.g=_[de],G=_t($,C,!0,f)&&G;if($=f.g=a,G=_t($,C,!0,f)&&G,G=_t($,C,!1,f)&&G,_)for(de=0;de<_.length;de++)$=f.g=_[de],G=_t($,C,!1,f)&&G}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const _=a.g[f];for(let C=0;C<_.length;C++)ie(_[C]);delete a.g[f],a.h--}}this.G=null},tt.prototype.J=function(a,f,_,C){return this.i.add(String(a),f,!1,_,C)},tt.prototype.K=function(a,f,_,C){return this.i.add(String(a),f,!0,_,C)};function _t(a,f,_,C){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let G=!0;for(let $=0;$<f.length;++$){const de=f[$];if(de&&!de.da&&de.capture==_){const Je=de.listener,Ht=de.ha||de.src;de.fa&&vt(a.i,de),G=Je.call(Ht,C)!==!1&&G}}return G&&!C.defaultPrevented}function Pe(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function P(a){a.g=Pe(()=>{a.g=null,a.i&&(a.i=!1,P(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class E extends x{constructor(f,_){super(),this.m=f,this.l=_,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:P(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function B(a){x.call(this),this.h=a,this.g={}}d(B,x);var J=[];function ne(a){xe(a.g,function(f,_){this.g.hasOwnProperty(_)&&et(f)},a),a.g={}}B.prototype.N=function(){B.Z.N.call(this),ne(this)},B.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var j=o.JSON.stringify,De=o.JSON.parse,pe=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Re(){}function Ve(){}var se={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function he(){T.call(this,"d")}d(he,T);function be(){T.call(this,"c")}d(be,T);var Me={},fe=null;function He(){return fe=fe||new tt}Me.Ia="serverreachability";function V(a){T.call(this,Me.Ia,a)}d(V,T);function ge(a){const f=He();ke(f,new V(f))}Me.STAT_EVENT="statevent";function ae(a,f){T.call(this,Me.STAT_EVENT,a),this.stat=f}d(ae,T);function ce(a){const f=He();ke(f,new ae(f,a))}Me.Ja="timingevent";function oe(a,f){T.call(this,Me.Ja,a),this.size=f}d(oe,T);function ee(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function le(){this.g=!0}le.prototype.ua=function(){this.g=!1};function ze(a,f,_,C,G,$){a.info(function(){if(a.g)if($){var de="",Je=$.split("&");for(let bt=0;bt<Je.length;bt++){var Ht=Je[bt].split("=");if(Ht.length>1){const Yt=Ht[0];Ht=Ht[1];const Un=Yt.split("_");de=Un.length>=2&&Un[1]=="type"?de+(Yt+"="+Ht+"&"):de+(Yt+"=redacted&")}}}else de=null;else de=$;return"XMLHTTP REQ ("+C+") [attempt "+G+"]: "+f+`
`+_+`
`+de})}function Tt(a,f,_,C,G,$,de){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+G+"]: "+f+`
`+_+`
`+$+" "+de})}function nt(a,f,_,C){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Rn(a,_)+(C?" "+C:"")})}function Tn(a,f){a.info(function(){return"TIMEOUT: "+f})}le.prototype.info=function(){};function Rn(a,f){if(!a.g)return f;if(!f)return null;try{const $=JSON.parse(f);if($){for(a=0;a<$.length;a++)if(Array.isArray($[a])){var _=$[a];if(!(_.length<2)){var C=_[1];if(Array.isArray(C)&&!(C.length<1)){var G=C[0];if(G!="noop"&&G!="stop"&&G!="close")for(let de=1;de<C.length;de++)C[de]=""}}}}return j($)}catch{return f}}var mr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gr;function fs(){}d(fs,Re),fs.prototype.g=function(){return new XMLHttpRequest},gr=new fs;function mi(a){return encodeURIComponent(String(a))}function ao(a){var f=1;a=a.split(":");const _=[];for(;f>0&&a.length;)_.push(a.shift()),f--;return a.length&&_.push(a.join(":")),_}function nn(a,f,_,C){this.j=a,this.i=f,this.l=_,this.S=C||1,this.V=new B(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _r}function _r(){this.i=null,this.g="",this.h=!1}var ds={},vr={};function gi(a,f,_){a.M=1,a.A=mt(Ce(f)),a.u=_,a.R=!0,ps(a,null)}function ps(a,f){a.F=Date.now(),yr(a),a.B=Ce(a.A);var _=a.B,C=a.S;Array.isArray(C)||(C=[String(C)]),Nn(_.i,"t",C),a.C=0,_=a.j.L,a.h=new _r,a.g=qu(a.j,_?f:null,!a.u),a.P>0&&(a.O=new E(u(a.Y,a,a.g),a.P)),f=a.V,_=a.g,C=a.ba;var G="readystatechange";Array.isArray(G)||(G&&(J[0]=G.toString()),G=J);for(let $=0;$<G.length;$++){const de=Ge(_,G[$],C||f.handleEvent,!1,f.h||f);if(!de)break;f.g[de.key]=de}f=a.J?Ee(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),ge(),ze(a.i,a.v,a.B,a.l,a.S,a.u)}nn.prototype.ba=function(a){a=a.target;const f=this.O;f&&xi(a)==3?f.j():this.Y(a)},nn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=xi(this.g),Ht=this.g.ya(),bt=this.g.ca();if(!(Je<3)&&(Je!=3||this.g&&(this.h.h||this.g.la()||Uu(this.g)))){this.K||Je!=4||Ht==7||(Ht==8||bt<=0?ge(3):ge(2)),gs(this);var f=this.g.ca();this.X=f;var _=xr(this);if(this.o=f==200,Tt(this.i,this.v,this.B,this.l,this.S,Je,f),this.o){if(this.U&&!this.L){t:{if(this.g){var C,G=this.g;if((C=G.g?G.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(C)){var $=C;break t}}$=null}if(a=$)nt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_s(this,a);else{this.o=!1,this.m=3,ce(12),Qn(this),Xi(this);break e}}if(this.R){a=!0;let Yt;for(;!this.K&&this.C<_.length;)if(Yt=lo(this,_),Yt==vr){Je==4&&(this.m=4,ce(14),a=!1),nt(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==ds){this.m=4,ce(15),nt(this.i,this.l,_,"[Invalid Chunk]"),a=!1;break}else nt(this.i,this.l,Yt,null),_s(this,Yt);if(ms(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||_.length!=0||this.h.h||(this.m=1,ce(16),a=!1),this.o=this.o&&a,!a)nt(this.i,this.l,_,"[Invalid Chunked Response]"),Qn(this),Xi(this);else if(_.length>0&&!this.W){this.W=!0;var de=this.j;de.g==this&&de.aa&&!de.P&&(de.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Oa(de),de.P=!0,ce(11))}}else nt(this.i,this.l,_,null),_s(this,_);Je==4&&Qn(this),this.o&&!this.K&&(Je==4?Gu(this.j,this):(this.o=!1,yr(this)))}else om(this.g),f==400&&_.indexOf("Unknown SID")>0?(this.m=3,ce(12)):(this.m=0,ce(13)),Qn(this),Xi(this)}}}catch{}};function xr(a){if(!ms(a))return a.g.la();const f=Uu(a.g);if(f==="")return"";let _="";const C=f.length,G=xi(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Qn(a),Xi(a),"";a.h.i=new o.TextDecoder}for(let $=0;$<C;$++)a.h.h=!0,_+=a.h.i.decode(f[$],{stream:!(G&&$==C-1)});return f.length=0,a.h.g+=_,a.C=0,a.h.g}function ms(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function lo(a,f){var _=a.C,C=f.indexOf(`
`,_);return C==-1?vr:(_=Number(f.substring(_,C)),isNaN(_)?ds:(C+=1,C+_>f.length?vr:(f=f.slice(C,C+_),a.C=C+_,f)))}nn.prototype.cancel=function(){this.K=!0,Qn(this)};function yr(a){a.T=Date.now()+a.H,co(a,a.H)}function co(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ee(u(a.aa,a),f)}function gs(a){a.D&&(o.clearTimeout(a.D),a.D=null)}nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Tn(this.i,this.B),this.M!=2&&(ge(),ce(17)),Qn(this),this.m=2,Xi(this)):co(this,this.T-a)};function Xi(a){a.j.I==0||a.K||Gu(a.j,a)}function Qn(a){gs(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,ne(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function _s(a,f){try{var _=a.j;if(_.I!=0&&(_.g==a||z(_.h,a))){if(!a.L&&z(_.h,a)&&_.I==3){try{var C=_.Ba.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var G=C;if(G[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<a.F)mo(_),fo(_);else break e;Fa(_),ce(18)}}else _.xa=G[1],0<_.xa-_.K&&G[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=ee(u(_.Va,_),6e3));H(_.h)<=1&&_.ta&&(_.ta=void 0)}else $i(_,11)}else if((a.L||_.g==a)&&mo(_),!A(f))for(G=_.Ba.g.parse(f),f=0;f<G.length;f++){let bt=G[f];const Yt=bt[0];if(!(Yt<=_.K))if(_.K=Yt,bt=bt[1],_.I==2)if(bt[0]=="c"){_.M=bt[1],_.ba=bt[2];const Un=bt[3];Un!=null&&(_.ka=Un,_.j.info("VER="+_.ka));const ji=bt[4];ji!=null&&(_.za=ji,_.j.info("SVER="+_.za));const yi=bt[5];yi!=null&&typeof yi=="number"&&yi>0&&(C=1.5*yi,_.O=C,_.j.info("backChannelRequestTimeoutMs_="+C)),C=_;const Ei=a.g;if(Ei){const _o=Ei.g?Ei.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_o){var $=C.h;$.g||_o.indexOf("spdy")==-1&&_o.indexOf("quic")==-1&&_o.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(me($,$.h),$.h=null))}if(C.G){const Va=Ei.g?Ei.g.getResponseHeader("X-HTTP-Session-Id"):null;Va&&(C.wa=Va,Be(C.J,C.G,Va))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-a.F,_.j.info("Handshake RTT: "+_.T+"ms")),C=_;var de=a;if(C.na=Xu(C,C.L?C.ba:null,C.W),de.L){Se(C.h,de);var Je=de,Ht=C.O;Ht&&(Je.H=Ht),Je.D&&(gs(Je),yr(Je)),C.g=de}else ku(C);_.i.length>0&&po(_)}else bt[0]!="stop"&&bt[0]!="close"||$i(_,7);else _.I==3&&(bt[0]=="stop"||bt[0]=="close"?bt[0]=="stop"?$i(_,7):Ua(_):bt[0]!="noop"&&_.l&&_.l.qa(bt),_.A=0)}}ge(4)}catch{}}var w=class{constructor(a,f){this.g=a,this.map=f}};function k(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function W(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function H(a){return a.h?1:a.g?a.g.size:0}function z(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function me(a,f){a.g?a.g.add(f):a.h=f}function Se(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}k.prototype.cancel=function(){if(this.i=ve(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ve(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const _ of a.g.values())f=f.concat(_.G);return f}return v(a.i)}var we=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Le(a,f){if(a){a=a.split("&");for(let _=0;_<a.length;_++){const C=a[_].indexOf("=");let G,$=null;C>=0?(G=a[_].substring(0,C),$=a[_].substring(C+1)):G=a[_],f(G,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Fe(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof Fe?(this.l=a.l,We(this,a.j),this.o=a.o,this.g=a.g,at(this,a.u),this.h=a.h,wt(this,Cu(a.i)),this.m=a.m):a&&(f=String(a).match(we))?(this.l=!1,We(this,f[1]||"",!0),this.o=Ne(f[2]||""),this.g=Ne(f[3]||"",!0),at(this,f[4]),this.h=Ne(f[5]||"",!0),wt(this,f[6]||"",!0),this.m=Ne(f[7]||"")):(this.l=!1,this.i=new Ft(null,this.l))}Fe.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(it(f,rn,!0),":");var _=this.g;return(_||f=="file")&&(a.push("//"),(f=this.o)&&a.push(it(f,rn,!0),"@"),a.push(mi(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&a.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&a.push("/"),a.push(it(_,_.charAt(0)=="/"?fn:_i,!0))),(_=this.i.toString())&&a.push("?",_),(_=this.m)&&a.push("#",it(_,Mt)),a.join("")},Fe.prototype.resolve=function(a){const f=Ce(this);let _=!!a.j;_?We(f,a.j):_=!!a.o,_?f.o=a.o:_=!!a.g,_?f.g=a.g:_=a.u!=null;var C=a.h;if(_)at(f,a.u);else if(_=!!a.h){if(C.charAt(0)!="/")if(this.g&&!this.h)C="/"+C;else{var G=f.h.lastIndexOf("/");G!=-1&&(C=f.h.slice(0,G+1)+C)}if(G=C,G==".."||G==".")C="";else if(G.indexOf("./")!=-1||G.indexOf("/.")!=-1){C=G.lastIndexOf("/",0)==0,G=G.split("/");const $=[];for(let de=0;de<G.length;){const Je=G[de++];Je=="."?C&&de==G.length&&$.push(""):Je==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),C&&de==G.length&&$.push("")):($.push(Je),C=!0)}C=$.join("/")}else C=G}return _?f.h=C:_=a.i.toString()!=="",_?wt(f,Cu(a.i)):_=!!a.m,_&&(f.m=a.m),f};function Ce(a){return new Fe(a)}function We(a,f,_){a.j=_?Ne(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function at(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function wt(a,f,_){f instanceof Ft?(a.i=f,em(a.i,a.l)):(_||(f=it(f,qi)),a.i=new Ft(f,a.l))}function Be(a,f,_){a.i.set(f,_)}function mt(a){return Be(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ne(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function it(a,f,_){return typeof a=="string"?(a=encodeURI(a).replace(f,lt),_&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lt(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rn=/[#\/\?@]/g,_i=/[#\?:]/g,fn=/[#\?]/g,qi=/[#\?@]/g,Mt=/#/g;function Ft(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Ot(a){a.g||(a.g=new Map,a.h=0,a.i&&Le(a.i,function(f,_){a.add(decodeURIComponent(f.replace(/\+/g," ")),_)}))}i=Ft.prototype,i.add=function(a,f){Ot(this),this.i=null,a=Sr(this,a);let _=this.g.get(a);return _||this.g.set(a,_=[]),_.push(f),this.h+=1,this};function jt(a,f){Ot(a),f=Sr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Jt(a,f){return Ot(a),f=Sr(a,f),a.g.has(f)}i.forEach=function(a,f){Ot(this),this.g.forEach(function(_,C){_.forEach(function(G){a.call(f,G,C,this)},this)},this)};function Er(a,f){Ot(a);let _=[];if(typeof f=="string")Jt(a,f)&&(_=_.concat(a.g.get(Sr(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)_=_.concat(a[f]);return _}i.set=function(a,f){return Ot(this),this.i=null,a=Sr(this,a),Jt(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},i.get=function(a,f){return a?(a=Er(this,a),a.length>0?String(a[0]):f):f};function Nn(a,f,_){jt(a,f),_.length>0&&(a.i=null,a.g.set(Sr(a,f),v(_)),a.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let C=0;C<f.length;C++){var _=f[C];const G=mi(_);_=Er(this,_);for(let $=0;$<_.length;$++){let de=G;_[$]!==""&&(de+="="+mi(_[$])),a.push(de)}}return this.i=a.join("&")};function Cu(a){const f=new Ft;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function Sr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function em(a,f){f&&!a.j&&(Ot(a),a.i=null,a.g.forEach(function(_,C){const G=C.toLowerCase();C!=G&&(jt(this,C),Nn(this,G,_))},a)),a.j=f}function tm(a,f){const _=new le;if(o.Image){const C=new Image;C.onload=h(vi,_,"TestLoadImage: loaded",!0,f,C),C.onerror=h(vi,_,"TestLoadImage: error",!1,f,C),C.onabort=h(vi,_,"TestLoadImage: abort",!1,f,C),C.ontimeout=h(vi,_,"TestLoadImage: timeout",!1,f,C),o.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else f(!1)}function nm(a,f){const _=new le,C=new AbortController,G=setTimeout(()=>{C.abort(),vi(_,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:C.signal}).then($=>{clearTimeout(G),$.ok?vi(_,"TestPingServer: ok",!0,f):vi(_,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(G),vi(_,"TestPingServer: error",!1,f)})}function vi(a,f,_,C,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),C(_)}catch{}}function im(){this.g=new pe}function La(a){this.i=a.Sb||null,this.h=a.ab||!1}d(La,Re),La.prototype.g=function(){return new uo(this.i,this.h)};function uo(a,f){tt.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(uo,tt),i=uo.prototype,i.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,xs(this)},i.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},i.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Iu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Iu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}i.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?vs(this):xs(this),this.readyState==3&&Iu(this)}},i.Oa=function(a){this.g&&(this.response=this.responseText=a,vs(this))},i.Na=function(a){this.g&&(this.response=a,vs(this))},i.ga=function(){this.g&&vs(this)};function vs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,xs(a)}i.setRequestHeader=function(a,f){this.A.append(a,f)},i.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var _=f.next();!_.done;)_=_.value,a.push(_[0]+": "+_[1]),_=f.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pu(a){let f="";return xe(a,function(_,C){f+=C,f+=":",f+=_,f+=`\r
`}),f}function Na(a,f,_){e:{for(C in _){var C=!1;break e}C=!0}C||(_=Pu(_),typeof a=="string"?_!=null&&mi(_):Be(a,f,_))}function Pt(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Pt,tt);var rm=/^https?$/i,sm=["POST","PUT"];i=Pt.prototype,i.Fa=function(a){this.H=a},i.ea=function(a,f,_,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gr.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch($){Du(this,$);return}if(a=_||"",_=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var G in C)_.set(G,C[G]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const $ of C.keys())_.set($,C.get($));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),G=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(sm,f,void 0)>=0)||C||G||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,de]of _)this.g.setRequestHeader($,de);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch($){Du(this,$)}};function Du(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,Lu(a),ho(a)}function Lu(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}i.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ke(this,"complete"),ke(this,"abort"),ho(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ho(this,!0)),Pt.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Nu(this):this.Xa())},i.Xa=function(){Nu(this)};function Nu(a){if(a.h&&typeof s<"u"){if(a.v&&xi(a)==4)setTimeout(a.Ca.bind(a),0);else if(ke(a,"readystatechange"),xi(a)==4){a.h=!1;try{const $=a.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var _;if(!(_=f)){var C;if(C=$===0){let de=String(a.D).match(we)[1]||null;!de&&o.self&&o.self.location&&(de=o.self.location.protocol.slice(0,-1)),C=!rm.test(de?de.toLowerCase():"")}_=C}if(_)ke(a,"complete"),ke(a,"success");else{a.o=6;try{var G=xi(a)>2?a.g.statusText:""}catch{G=""}a.l=G+" ["+a.ca()+"]",Lu(a)}}finally{ho(a)}}}}function ho(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const _=a.g;a.g=null,f||ke(a,"ready");try{_.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function xi(a){return a.g?a.g.readyState:0}i.ca=function(){try{return xi(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),De(f)}};function Uu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function om(a){const f={};a=(a.g&&xi(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(A(a[C]))continue;var _=ao(a[C]);const G=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=f[G]||[];f[G]=$,$.push(_)}_e(f,function(C){return C.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(a,f,_){return _&&_.internalChannelParams&&_.internalChannelParams[a]||f}function Fu(a){this.za=0,this.i=[],this.j=new le,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ys("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ys("baseRetryDelayMs",5e3,a),this.Za=ys("retryDelaySeedMs",1e4,a),this.Ta=ys("forwardChannelMaxRetries",2,a),this.va=ys("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new k(a&&a.concurrentRequestLimit),this.Ba=new im,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Fu.prototype,i.ka=8,i.I=1,i.connect=function(a,f,_,C){ce(0),this.W=a,this.H=f||{},_&&C!==void 0&&(this.H.OSID=_,this.H.OAID=C),this.F=this.X,this.J=Xu(this,null,this.W),po(this)};function Ua(a){if(Ou(a),a.I==3){var f=a.V++,_=Ce(a.J);if(Be(_,"SID",a.M),Be(_,"RID",f),Be(_,"TYPE","terminate"),Es(a,_),f=new nn(a,a.j,f),f.M=2,f.A=mt(Ce(_)),_=!1,o.navigator&&o.navigator.sendBeacon)try{_=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!_&&o.Image&&(new Image().src=f.A,_=!0),_||(f.g=qu(f.j,null),f.g.ea(f.A)),f.F=Date.now(),yr(f)}Wu(a)}function fo(a){a.g&&(Oa(a),a.g.cancel(),a.g=null)}function Ou(a){fo(a),a.v&&(o.clearTimeout(a.v),a.v=null),mo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function po(a){if(!W(a.h)&&!a.m){a.m=!0;var f=a.Ea;U||M(),F||(U(),F=!0),S.add(f,a),a.D=0}}function am(a,f){return H(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ee(u(a.Ea,a,f),Hu(a,a.D)),a.D++,!0)}i.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const G=new nn(this,this.j,a);let $=this.o;if(this.U&&($?($=Ee($),Ye($,this.U)):$=this.U),this.u!==null||this.R||(G.J=$,$=null),this.S)e:{for(var f=0,_=0;_<this.i.length;_++){t:{var C=this.i[_];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(f+=C,f>4096){f=_;break e}if(f===4096||_===this.i.length-1){f=_+1;break e}}f=1e3}else f=1e3;f=Bu(this,G,f),_=Ce(this.J),Be(_,"RID",a),Be(_,"CVER",22),this.G&&Be(_,"X-HTTP-Session-Id",this.G),Es(this,_),$&&(this.R?f="headers="+mi(Pu($))+"&"+f:this.u&&Na(_,this.u,$)),me(this.h,G),this.Ra&&Be(_,"TYPE","init"),this.S?(Be(_,"$req",f),Be(_,"SID","null"),G.U=!0,gi(G,_,null)):gi(G,_,f),this.I=2}}else this.I==3&&(a?Vu(this,a):this.i.length==0||W(this.h)||Vu(this))};function Vu(a,f){var _;f?_=f.l:_=a.V++;const C=Ce(a.J);Be(C,"SID",a.M),Be(C,"RID",_),Be(C,"AID",a.K),Es(a,C),a.u&&a.o&&Na(C,a.u,a.o),_=new nn(a,a.j,_,a.D+1),a.u===null&&(_.J=a.o),f&&(a.i=f.G.concat(a.i)),f=Bu(a,_,1e3),_.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),me(a.h,_),gi(_,C,f)}function Es(a,f){a.H&&xe(a.H,function(_,C){Be(f,C,_)}),a.l&&xe({},function(_,C){Be(f,C,_)})}function Bu(a,f,_){_=Math.min(a.i.length,_);const C=a.l?u(a.l.Ka,a.l,a):null;e:{var G=a.i;let Je=-1;for(;;){const Ht=["count="+_];Je==-1?_>0?(Je=G[0].g,Ht.push("ofs="+Je)):Je=0:Ht.push("ofs="+Je);let bt=!0;for(let Yt=0;Yt<_;Yt++){var $=G[Yt].g;const Un=G[Yt].map;if($-=Je,$<0)Je=Math.max(0,G[Yt].g-100),bt=!1;else try{$="req"+$+"_"||"";try{var de=Un instanceof Map?Un:Object.entries(Un);for(const[ji,yi]of de){let Ei=yi;l(yi)&&(Ei=j(yi)),Ht.push($+ji+"="+encodeURIComponent(Ei))}}catch(ji){throw Ht.push($+"type="+encodeURIComponent("_badmap")),ji}}catch{C&&C(Un)}}if(bt){de=Ht.join("&");break e}}de=void 0}return a=a.i.splice(0,_),f.G=a,de}function ku(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;U||M(),F||(U(),F=!0),S.add(f,a),a.A=0}}function Fa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ee(u(a.Da,a),Hu(a,a.A)),a.A++,!0)}i.Da=function(){if(this.v=null,zu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ee(u(this.Wa,this),a)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ce(10),fo(this),zu(this))};function Oa(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function zu(a){a.g=new nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=Ce(a.na);Be(f,"RID","rpc"),Be(f,"SID",a.M),Be(f,"AID",a.K),Be(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&Be(f,"TO",a.ia),Be(f,"TYPE","xmlhttp"),Es(a,f),a.u&&a.o&&Na(f,a.u,a.o),a.O&&(a.g.H=a.O);var _=a.g;a=a.ba,_.M=1,_.A=mt(Ce(f)),_.u=null,_.R=!0,ps(_,a)}i.Va=function(){this.C!=null&&(this.C=null,fo(this),Fa(this),ce(19))};function mo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Gu(a,f){var _=null;if(a.g==f){mo(a),Oa(a),a.g=null;var C=2}else if(z(a.h,f))_=f.G,Se(a.h,f),C=1;else return;if(a.I!=0){if(f.o)if(C==1){_=f.u?f.u.length:0,f=Date.now()-f.F;var G=a.D;C=He(),ke(C,new oe(C,_)),po(a)}else ku(a);else if(G=f.m,G==3||G==0&&f.X>0||!(C==1&&am(a,f)||C==2&&Fa(a)))switch(_&&_.length>0&&(f=a.h,f.i=f.i.concat(_)),G){case 1:$i(a,5);break;case 4:$i(a,10);break;case 3:$i(a,6);break;default:$i(a,2)}}}function Hu(a,f){let _=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(_*=2),_*f}function $i(a,f){if(a.j.info("Error code "+f),f==2){var _=u(a.bb,a),C=a.Ua;const G=!C;C=new Fe(C||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||We(C,"https"),mt(C),G?tm(C.toString(),_):nm(C.toString(),_)}else ce(2);a.I=0,a.l&&a.l.pa(f),Wu(a),Ou(a)}i.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function Wu(a){if(a.I=0,a.ja=[],a.l){const f=ve(a.h);(f.length!=0||a.i.length!=0)&&(b(a.ja,f),b(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Xu(a,f,_){var C=_ instanceof Fe?Ce(_):new Fe(_);if(C.g!="")f&&(C.g=f+"."+C.g),at(C,C.u);else{var G=o.location;C=G.protocol,f=f?f+"."+G.hostname:G.hostname,G=+G.port;const $=new Fe(null);C&&We($,C),f&&($.g=f),G&&at($,G),_&&($.h=_),C=$}return _=a.G,f=a.wa,_&&f&&Be(C,_,f),Be(C,"VER",a.ka),Es(a,C),C}function qu(a,f,_){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new Pt(new La({ab:_})):new Pt(a.ma),f.Fa(a.L),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function $u(){}i=$u.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function go(){}go.prototype.g=function(a,f){return new xn(a,f)};function xn(a,f){tt.call(this),this.g=new Fu(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!A(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!A(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Tr(this)}d(xn,tt),xn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){Ua(this.g)},xn.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var _={};_.__data__=a,a=_}else this.v&&(_={},_.__data__=j(a),a=_);f.i.push(new w(f.Ya++,a)),f.I==3&&po(f)},xn.prototype.N=function(){this.g.l=null,delete this.j,Ua(this.g),delete this.g,xn.Z.N.call(this)};function ju(a){he.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const _ in f){a=_;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}d(ju,he);function Yu(){be.call(this),this.status=1}d(Yu,be);function Tr(a){this.g=a}d(Tr,$u),Tr.prototype.ra=function(){ke(this.g,"a")},Tr.prototype.qa=function(a){ke(this.g,new ju(a))},Tr.prototype.pa=function(a){ke(this.g,new Yu)},Tr.prototype.oa=function(){ke(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,Qd=function(){return new go},Kd=function(){return He()},Yd=Me,Ac={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,Ko=mr,hs.COMPLETE="complete",jd=hs,Ve.EventType=se,se.OPEN="a",se.CLOSE="b",se.ERROR="c",se.MESSAGE="d",tt.prototype.listen=tt.prototype.J,Ds=Ve,Pt.prototype.listenOnce=Pt.prototype.K,Pt.prototype.getLastError=Pt.prototype.Ha,Pt.prototype.getLastErrorCode=Pt.prototype.ya,Pt.prototype.getStatus=Pt.prototype.ca,Pt.prototype.getResponseJson=Pt.prototype.La,Pt.prototype.getResponseText=Pt.prototype.la,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Fa,$d=Pt}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");let ls="12.9.0";function lS(i){ls=i}const fr=new kd("@firebase/firestore");function Vr(){return fr.logLevel}function Ae(i,...e){if(fr.logLevel<=ut.DEBUG){const t=e.map(ou);fr.debug(`Firestore (${ls}): ${i}`,...t)}}function di(i,...e){if(fr.logLevel<=ut.ERROR){const t=e.map(ou);fr.error(`Firestore (${ls}): ${i}`,...t)}}function dr(i,...e){if(fr.logLevel<=ut.WARN){const t=e.map(ou);fr.warn(`Firestore (${ls}): ${i}`,...t)}}function ou(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}function je(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Jd(i,n,t)}function Jd(i,e,t){let n=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw di(n),new Error(n)}function It(i,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,i||Jd(e,r,n)}function ht(i,e){return i}const ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ue extends as{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class lr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}class Zd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ln.UNAUTHENTICATED)))}shutdown(){}}class uS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hS{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){It(this.o===void 0,42304);let n=this.i;const r=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{Ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(Ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(It(typeof n.accessToken=="string",31837,{l:n}),new Zd(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return It(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class fS{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dS{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new fS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ln.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,XE(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){It(this.o===void 0,3512);const n=s=>{s.error!=null&&Ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const r=s=>{Ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>r(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):Ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new rf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(It(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new rf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function mS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}class au{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=mS(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%62))}return n}}function st(i,e){return i<e?-1:i>e?1:0}function bc(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++){const r=i.charAt(n),s=e.charAt(n);if(r!==s)return yl(r)===yl(s)?st(r,s):yl(r)?1:-1}return st(i.length,e.length)}const gS=55296,_S=57343;function yl(i){const e=i.charCodeAt(0);return e>=gS&&e<=_S}function Zr(i,e,t){return i.length===e.length&&i.every(((n,r)=>t(n,e[r])))}const sf="__name__";class On{constructor(e,t,n){t===void 0?t=0:t>e.length&&je(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&je(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return On.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof On?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=On.compareSegments(e.get(r),t.get(r));if(s!==0)return s}return st(e.length,t.length)}static compareSegments(e,t){const n=On.isNumericId(e),r=On.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?On.extractNumericId(e).compare(On.extractNumericId(t)):bc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class Rt extends On{construct(e,t,n){return new Rt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ue(ue.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Rt(t)}static emptyPath(){return new Rt([])}}const vS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pn extends On{construct(e,t,n){return new pn(e,t,n)}static isValidIdentifier(e){return vS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sf}static keyField(){return new pn([sf])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(n.length===0)throw new Ue(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new Ue(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Ue(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(n+=l,r++):(s(),r++)}if(s(),o)throw new Ue(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pn(t)}static emptyPath(){return new pn([])}}class Oe{constructor(e){this.path=e}static fromPath(e){return new Oe(Rt.fromString(e))}static fromName(e){return new Oe(Rt.fromString(e).popFirst(5))}static empty(){return new Oe(Rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oe(new Rt(e.slice()))}}function ep(i,e,t){if(!t)throw new Ue(ue.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function xS(i,e,t,n){if(e===!0&&n===!0)throw new Ue(ue.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function of(i){if(!Oe.isDocumentKey(i))throw new Ue(ue.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function af(i){if(Oe.isDocumentKey(i))throw new Ue(ue.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function yS(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ES(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":je(12329,{type:typeof i})}function wc(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Ue(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ES(i);throw new Ue(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}function zt(i,e){const t={typeString:i};return e&&(t.value=e),t}function no(i,e){if(!yS(i))throw new Ue(ue.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in i)){t=`JSON missing required field: '${n}'`;break}const o=i[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new Ue(ue.INVALID_ARGUMENT,t);return!0}const lf=-62135596800,cf=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*cf);return new kt(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ue(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ue(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lf)throw new Ue(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ue(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cf}_compareTo(e){return this.seconds===e.seconds?st(this.nanoseconds,e.nanoseconds):st(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(no(e,kt._jsonSchema))return new kt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:zt("string",kt._jsonSchemaVersion),seconds:zt("number"),nanoseconds:zt("number")};class qe{static fromTimestamp(e){return new qe(e)}static min(){return new qe(new kt(0,0))}static max(){return new qe(new kt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const js=-1;function SS(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=qe.fromTimestamp(n===1e9?new kt(t+1,0):new kt(t,n));return new Bi(r,Oe.empty(),e)}function TS(i){return new Bi(i.readTime,i.key,js)}class Bi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Bi(qe.min(),Oe.empty(),js)}static max(){return new Bi(qe.max(),Oe.empty(),js)}}function MS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Oe.comparator(i.documentKey,e.documentKey),t!==0?t:st(i.largestBatchId,e.largestBatchId))}const AS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}async function Ea(i){if(i.code!==ue.FAILED_PRECONDITION||i.message!==AS)throw i;Ae("LocalStore","Unexpectedly lost primary lease")}class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&je(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te(((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):te.reject(t)}static resolve(e){return new te(((t,n)=>{t(e)}))}static reject(e){return new te(((t,n)=>{n(e)}))}static waitFor(e){return new te(((t,n)=>{let r=0,s=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++s,o&&s===r&&t()}),(c=>n(c)))})),o=!0,s===r&&t()}))}static or(e){let t=te.resolve(!1);for(const n of e)t=t.next((r=>r?te.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,s)=>{n.push(t.call(this,r,s))})),this.waitFor(n)}static mapArray(e,t){return new te(((n,r)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next((h=>{o[u]=h,++l,l===s&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new te(((n,r)=>{const s=()=>{e()===!0?t().next((()=>{s()}),r):n()};s()}))}}function wS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cs(i){return i.name==="IndexedDbTransactionError"}class Sa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Sa.ce=-1;const RS=-1;function Ta(i){return i==null}function Rc(i){return i===0&&1/i==-1/0}const tp="";function CS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=uf(e)),e=IS(i.get(t),e);return uf(e)}function IS(i,e){let t=e;const n=i.length;for(let r=0;r<n;r++){const s=i.charAt(r);switch(s){case"\0":t+="";break;case tp:t+="";break;default:t+=s}}return t}function uf(i){return i+tp+""}function hf(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function io(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function PS(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}class Ut{constructor(e,t){this.comparator=e,this.root=t||Zt.EMPTY}insert(e,t){return new Ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new Ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=n??Zt.RED,this.left=r??Zt.EMPTY,this.right=s??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Zt(e??this.key,t??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Zt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw je(43730,{key:this.key,value:this.value});if(this.right.isRed())throw je(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw je(27949);return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw je(57766)}get value(){throw je(16141)}get color(){throw je(16727)}get left(){throw je(29726)}get right(){throw je(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new Zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class Xt{constructor(e){this.comparator=e,this.data=new Ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ff(this.data.getIterator())}getIteratorFrom(e){return new ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xt(this.comparator);return t.data=e,t}}class ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class Ii{constructor(e){this.fields=e,e.sort(pn.comparator)}static empty(){return new Ii([])}unionWith(e){let t=new Xt(pn.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ii(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}class np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new np("Invalid base64 string: "+s):s}})(e);return new tn(t)}static fromUint8Array(e){const t=(function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s})(e);return new tn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return st(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const DS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(i){if(It(!!i,39018),typeof i=="string"){let e=0;const t=DS.exec(i);if(It(!!t,46558,{timestamp:i}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Lt(i.seconds),nanos:Lt(i.nanos)}}function Lt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function zi(i){return typeof i=="string"?tn.fromBase64String(i):tn.fromUint8Array(i)}const ip="server_timestamp",rp="__type__",sp="__previous_value__",op="__local_write_time__";function lu(i){return(i?.mapValue?.fields||{})[rp]?.stringValue===ip}function Ma(i){const e=i.mapValue.fields[sp];return lu(e)?Ma(e):e}function Ys(i){const e=ki(i.mapValue.fields[op].timestampValue);return new kt(e.seconds,e.nanos)}class LS{constructor(e,t,n,r,s,o,l,c,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d}}const la="(default)";class Ks{constructor(e,t){this.projectId=e,this.database=t||la}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database===la}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}function NS(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Ue(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(i.options.projectId,e)}const US="__type__",FS="__max__",zo={mapValue:{}},OS="__vector__",Cc="value";function Gi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?lu(i)?4:BS(i)?9007199254740991:VS(i)?10:11:je(28295,{value:i})}function Yn(i,e){if(i===e)return!0;const t=Gi(i);if(t!==Gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ys(i).isEqual(Ys(e));case 3:return(function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=ki(r.timestampValue),l=ki(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(r,s){return zi(r.bytesValue).isEqual(zi(s.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(r,s){return Lt(r.geoPointValue.latitude)===Lt(s.geoPointValue.latitude)&&Lt(r.geoPointValue.longitude)===Lt(s.geoPointValue.longitude)})(i,e);case 2:return(function(r,s){if("integerValue"in r&&"integerValue"in s)return Lt(r.integerValue)===Lt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Lt(r.doubleValue),l=Lt(s.doubleValue);return o===l?Rc(o)===Rc(l):isNaN(o)&&isNaN(l)}return!1})(i,e);case 9:return Zr(i.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return(function(r,s){const o=r.mapValue.fields||{},l=s.mapValue.fields||{};if(hf(o)!==hf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Yn(o[c],l[c])))return!1;return!0})(i,e);default:return je(52216,{left:i})}}function Qs(i,e){return(i.values||[]).find((t=>Yn(t,e)))!==void 0}function es(i,e){if(i===e)return 0;const t=Gi(i),n=Gi(e);if(t!==n)return st(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return st(i.booleanValue,e.booleanValue);case 2:return(function(s,o){const l=Lt(s.integerValue||s.doubleValue),c=Lt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(i,e);case 3:return df(i.timestampValue,e.timestampValue);case 4:return df(Ys(i),Ys(e));case 5:return bc(i.stringValue,e.stringValue);case 6:return(function(s,o){const l=zi(s),c=zi(o);return l.compareTo(c)})(i.bytesValue,e.bytesValue);case 7:return(function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=st(l[u],c[u]);if(h!==0)return h}return st(l.length,c.length)})(i.referenceValue,e.referenceValue);case 8:return(function(s,o){const l=st(Lt(s.latitude),Lt(o.latitude));return l!==0?l:st(Lt(s.longitude),Lt(o.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return pf(i.arrayValue,e.arrayValue);case 10:return(function(s,o){const l=s.fields||{},c=o.fields||{},u=l[Cc]?.arrayValue,h=c[Cc]?.arrayValue,d=st(u?.values?.length||0,h?.values?.length||0);return d!==0?d:pf(u,h)})(i.mapValue,e.mapValue);case 11:return(function(s,o){if(s===zo.mapValue&&o===zo.mapValue)return 0;if(s===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=bc(c[d],h[d]);if(p!==0)return p;const v=es(l[c[d]],u[h[d]]);if(v!==0)return v}return st(c.length,h.length)})(i.mapValue,e.mapValue);default:throw je(23264,{he:t})}}function df(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return st(i,e);const t=ki(i),n=ki(e),r=st(t.seconds,n.seconds);return r!==0?r:st(t.nanos,n.nanos)}function pf(i,e){const t=i.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const s=es(t[r],n[r]);if(s)return s}return st(t.length,n.length)}function ts(i){return Ic(i)}function Ic(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const n=ki(t);return`time(${n.seconds},${n.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return zi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return Oe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let n="[",r=!0;for(const s of t.values||[])r?r=!1:n+=",",n+=Ic(s);return n+"]"})(i.arrayValue):"mapValue"in i?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${Ic(t.fields[o])}`;return r+"}"})(i.mapValue):je(61005,{value:i})}function Qo(i){switch(Gi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ma(i);return e?16+Qo(e):16;case 5:return 2*i.stringValue.length;case 6:return zi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,s)=>r+Qo(s)),0)})(i.arrayValue);case 10:case 11:return(function(n){let r=0;return io(n.fields,((s,o)=>{r+=s.length+Qo(o)})),r})(i.mapValue);default:throw je(13486,{value:i})}}function Pc(i){return!!i&&"integerValue"in i}function cu(i){return!!i&&"arrayValue"in i}function mf(i){return!!i&&"nullValue"in i}function gf(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function El(i){return!!i&&"mapValue"in i}function VS(i){return(i?.mapValue?.fields||{})[US]?.stringValue===OS}function Os(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return io(i.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Os(n))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Os(i.arrayValue.values[t]);return e}return{...i}}function BS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===FS}class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!El(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(t)}setAll(e){let t=pn.emptyPath(),n={},r=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,r),n={},r=[],t=l.popLast()}o?n[l.lastSegment()]=Os(o):r.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());El(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];El(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){io(t,((r,s)=>e[r]=s));for(const r of n)delete e[r]}clone(){return new Bn(Os(this.value))}}class cn{constructor(e,t,n,r,s,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new cn(e,0,qe.min(),qe.min(),qe.min(),Bn.empty(),0)}static newFoundDocument(e,t,n,r){return new cn(e,1,t,qe.min(),n,r,0)}static newNoDocument(e,t){return new cn(e,2,t,qe.min(),qe.min(),Bn.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,qe.min(),qe.min(),Bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ca{constructor(e,t){this.position=e,this.inclusive=t}}function _f(i,e,t){let n=0;for(let r=0;r<i.position.length;r++){const s=e[r],o=i.position[r];if(s.field.isKeyField()?n=Oe.comparator(Oe.fromName(o.referenceValue),t.key):n=es(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function vf(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Yn(i.position[t],e.position[t]))return!1;return!0}class ua{constructor(e,t="asc"){this.field=e,this.dir=t}}function kS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}class ap{}class Wt extends ap{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new GS(e,t,n):t==="array-contains"?new XS(e,n):t==="in"?new qS(e,n):t==="not-in"?new $S(e,n):t==="array-contains-any"?new jS(e,n):new Wt(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new HS(e,n):new WS(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(es(t,this.value)):t!==null&&Gi(this.value)===Gi(t)&&this.matchesComparison(es(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return je(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends ap{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Kn(e,t)}matches(e){return lp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lp(i){return i.op==="and"}function cp(i){return zS(i)&&lp(i)}function zS(i){for(const e of i.filters)if(e instanceof Kn)return!1;return!0}function Dc(i){if(i instanceof Wt)return i.field.canonicalString()+i.op.toString()+ts(i.value);if(cp(i))return i.filters.map((e=>Dc(e))).join(",");{const e=i.filters.map((t=>Dc(t))).join(",");return`${i.op}(${e})`}}function up(i,e){return i instanceof Wt?(function(n,r){return r instanceof Wt&&n.op===r.op&&n.field.isEqual(r.field)&&Yn(n.value,r.value)})(i,e):i instanceof Kn?(function(n,r){return r instanceof Kn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((s,o,l)=>s&&up(o,r.filters[l])),!0):!1})(i,e):void je(19439)}function hp(i){return i instanceof Wt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ts(t.value)}`})(i):i instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(hp).join(" ,")+"}"})(i):"Filter"}class GS extends Wt{constructor(e,t,n){super(e,t,n),this.key=Oe.fromName(n.referenceValue)}matches(e){const t=Oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class HS extends Wt{constructor(e,t){super(e,"in",t),this.keys=fp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class WS extends Wt{constructor(e,t){super(e,"not-in",t),this.keys=fp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function fp(i,e){return(e.arrayValue?.values||[]).map((t=>Oe.fromName(t.referenceValue)))}class XS extends Wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cu(t)&&Qs(t.arrayValue,this.value)}}class qS extends Wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qs(this.value.arrayValue,t)}}class $S extends Wt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qs(this.value.arrayValue,t)}}class jS extends Wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Qs(this.value.arrayValue,n)))}}class YS{constructor(e,t=null,n=[],r=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function xf(i,e=null,t=[],n=[],r=null,s=null,o=null){return new YS(i,e,t,n,r,s,o)}function uu(i){const e=ht(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Dc(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),Ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>ts(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>ts(n))).join(",")),e.Te=t}return e.Te}function hu(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!kS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!up(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!vf(i.startAt,e.startAt)&&vf(i.endAt,e.endAt)}function Lc(i){return Oe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}class Aa{constructor(e,t=null,n=[],r=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function KS(i,e,t,n,r,s,o,l){return new Aa(i,e,t,n,r,s,o,l)}function fu(i){return new Aa(i)}function yf(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function QS(i){return Oe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function JS(i){return i.collectionGroup!==null}function Vs(i){const e=ht(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xt(pn.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ua(s,n))})),t.has(pn.keyField().canonicalString())||e.Ie.push(new ua(pn.keyField(),n))}return e.Ie}function qn(i){const e=ht(i);return e.Ee||(e.Ee=ZS(e,Vs(i))),e.Ee}function ZS(i,e){if(i.limitType==="F")return xf(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((r=>{const s=r.dir==="desc"?"asc":"desc";return new ua(r.field,s)}));const t=i.endAt?new ca(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new ca(i.startAt.position,i.startAt.inclusive):null;return xf(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function Nc(i,e,t){return new Aa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ba(i,e){return hu(qn(i),qn(e))&&i.limitType===e.limitType}function dp(i){return`${uu(qn(i))}|lt:${i.limitType}`}function Br(i){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>hp(r))).join(", ")}]`),Ta(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>ts(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>ts(r))).join(",")),`Target(${n})`})(qn(i))}; limitType=${i.limitType})`}function wa(i,e){return e.isFoundDocument()&&(function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Oe.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(i,e)&&(function(n,r){for(const s of Vs(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0})(i,e)&&(function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0})(i,e)&&(function(n,r){return!(n.startAt&&!(function(o,l,c){const u=_f(o,l,c);return o.inclusive?u<=0:u<0})(n.startAt,Vs(n),r)||n.endAt&&!(function(o,l,c){const u=_f(o,l,c);return o.inclusive?u>=0:u>0})(n.endAt,Vs(n),r))})(i,e)}function eT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function pp(i){return(e,t)=>{let n=!1;for(const r of Vs(i)){const s=tT(r,e,t);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function tT(i,e,t){const n=i.field.isKeyField()?Oe.comparator(e.key,t.key):(function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?es(c,u):je(42886)})(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return je(19790,{direction:i.dir})}}class pr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){io(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return PS(this.inner)}size(){return this.innerSize}}const nT=new Ut(Oe.comparator);function Hi(){return nT}const mp=new Ut(Oe.comparator);function Ls(...i){let e=mp;for(const t of i)e=e.insert(t.key,t);return e}function iT(i){let e=mp;return i.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ar(){return Bs()}function gp(){return Bs()}function Bs(){return new pr((i=>i.toString()),((i,e)=>i.isEqual(e)))}const rT=new Xt(Oe.comparator);function dt(...i){let e=rT;for(const t of i)e=e.add(t);return e}const sT=new Xt(st);function oT(){return sT}function aT(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function lT(i){return{integerValue:""+i}}class Ra{constructor(){this._=void 0}}function cT(i,e,t){return i instanceof Uc?(function(r,s){const o={fields:{[rp]:{stringValue:ip},[op]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&lu(s)&&(s=Ma(s)),s&&(o.fields[sp]=s),{mapValue:o}})(t,e):i instanceof ha?_p(i,e):i instanceof fa?vp(i,e):(function(r,s){const o=hT(r,s),l=Ef(o)+Ef(r.Ae);return Pc(o)&&Pc(r.Ae)?lT(l):aT(r.serializer,l)})(i,e)}function uT(i,e,t){return i instanceof ha?_p(i,e):i instanceof fa?vp(i,e):t}function hT(i,e){return i instanceof Fc?(function(n){return Pc(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class Uc extends Ra{}class ha extends Ra{constructor(e){super(),this.elements=e}}function _p(i,e){const t=xp(e);for(const n of i.elements)t.some((r=>Yn(r,n)))||t.push(n);return{arrayValue:{values:t}}}class fa extends Ra{constructor(e){super(),this.elements=e}}function vp(i,e){let t=xp(e);for(const n of i.elements)t=t.filter((r=>!Yn(r,n)));return{arrayValue:{values:t}}}class Fc extends Ra{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ef(i){return Lt(i.integerValue||i.doubleValue)}function xp(i){return cu(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function fT(i,e){return i.field.isEqual(e.field)&&(function(n,r){return n instanceof ha&&r instanceof ha||n instanceof fa&&r instanceof fa?Zr(n.elements,r.elements,Yn):n instanceof Fc&&r instanceof Fc?Yn(n.Ae,r.Ae):n instanceof Uc&&r instanceof Uc})(i.transform,e.transform)}class cr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class du{}function yp(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new pT(i.key,cr.none()):new pu(i.key,i.data,cr.none());{const t=i.data,n=Bn.empty();let r=new Xt(pn.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new Ca(i.key,n,new Ii(r.toArray()),cr.none())}}function dT(i,e,t){i instanceof pu?(function(r,s,o){const l=r.value.clone(),c=Tf(r.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(i,e,t):i instanceof Ca?(function(r,s,o){if(!Jo(r.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Tf(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Ep(r)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(i,e,t):(function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ks(i,e,t,n){return i instanceof pu?(function(s,o,l,c){if(!Jo(s.precondition,o))return l;const u=s.value.clone(),h=Mf(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(i,e,t,n):i instanceof Ca?(function(s,o,l,c){if(!Jo(s.precondition,o))return l;const u=Mf(s.fieldTransforms,c,o),h=o.data;return h.setAll(Ep(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((d=>d.field)))})(i,e,t,n):(function(s,o,l){return Jo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(i,e,t)}function Sf(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Zr(n,r,((s,o)=>fT(s,o)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class pu extends du{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ca extends du{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ep(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}})),e}function Tf(i,e,t){const n=new Map;It(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let r=0;r<t.length;r++){const s=i[r],o=s.transform,l=e.data.field(s.field);n.set(s.field,uT(o,l,t[r]))}return n}function Mf(i,e,t){const n=new Map;for(const r of i){const s=r.transform,o=t.data.field(r.field);n.set(r.field,cT(s,o,e))}return n}class pT extends du{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mT{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&dT(s,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ks(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ks(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=gp();return this.mutations.forEach((r=>{const s=e.get(r.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(r.key)?null:l;const c=yp(o,l);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(qe.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),dt())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((t,n)=>Sf(t,n)))&&Zr(this.baseMutations,e.baseMutations,((t,n)=>Sf(t,n)))}}class gT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}class _T{constructor(e,t){this.count=e,this.unchangedNames=t}}var Bt,ct;function Sp(i){if(i===void 0)return di("GRPC error has no .code"),ue.UNKNOWN;switch(i){case Bt.OK:return ue.OK;case Bt.CANCELLED:return ue.CANCELLED;case Bt.UNKNOWN:return ue.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return ue.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return ue.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return ue.INTERNAL;case Bt.UNAVAILABLE:return ue.UNAVAILABLE;case Bt.UNAUTHENTICATED:return ue.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return ue.INVALID_ARGUMENT;case Bt.NOT_FOUND:return ue.NOT_FOUND;case Bt.ALREADY_EXISTS:return ue.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return ue.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return ue.FAILED_PRECONDITION;case Bt.ABORTED:return ue.ABORTED;case Bt.OUT_OF_RANGE:return ue.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return ue.UNIMPLEMENTED;case Bt.DATA_LOSS:return ue.DATA_LOSS;default:return je(39323,{code:i})}}(ct=Bt||(Bt={}))[ct.OK=0]="OK",ct[ct.CANCELLED=1]="CANCELLED",ct[ct.UNKNOWN=2]="UNKNOWN",ct[ct.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ct[ct.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ct[ct.NOT_FOUND=5]="NOT_FOUND",ct[ct.ALREADY_EXISTS=6]="ALREADY_EXISTS",ct[ct.PERMISSION_DENIED=7]="PERMISSION_DENIED",ct[ct.UNAUTHENTICATED=16]="UNAUTHENTICATED",ct[ct.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ct[ct.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ct[ct.ABORTED=10]="ABORTED",ct[ct.OUT_OF_RANGE=11]="OUT_OF_RANGE",ct[ct.UNIMPLEMENTED=12]="UNIMPLEMENTED",ct[ct.INTERNAL=13]="INTERNAL",ct[ct.UNAVAILABLE=14]="UNAVAILABLE",ct[ct.DATA_LOSS=15]="DATA_LOSS";function vT(){return new TextEncoder}const xT=new Ni([4294967295,4294967295],0);function Af(i){const e=vT().encode(i),t=new qd;return t.update(e),new Uint8Array(t.digest())}function bf(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ni([t,n],0),new Ni([r,s],0)]}class mu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ns(`Invalid padding: ${t}`);if(n<0)throw new Ns(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ni.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Ni.fromNumber(n)));return r.compare(xT)===1&&(r=new Ni([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Af(e),[n,r]=bf(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,r,s);if(!this.we(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mu(s,r,t);return n.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const t=Af(e),[n,r]=bf(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,r,s);this.be(o)}}be(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class Ia{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ro.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ia(qe.min(),r,new Ut(st),Hi(),dt())}}class ro{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ro(n,t,dt(),dt(),dt())}}class Zo{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Tp{constructor(e,t){this.targetId=e,this.Ce=t}}class Mp{constructor(e,t,n=tn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class wf{constructor(){this.ve=0,this.Fe=Rf(),this.Me=tn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=dt(),t=dt(),n=dt();return this.Fe.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:je(38017,{changeType:s})}})),new ro(this.Me,this.xe,e,t,n)}Ke(){this.Oe=!1,this.Fe=Rf()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,It(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class yT{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hi(),this.He=Go(),this.Je=Go(),this.Ze=new Ut(st)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:je(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const s=r.target;if(Lc(s))if(n===0){const o=new Oe(s.path);this.et(t,o,cn.newNoDocument(o,qe.min()))}else It(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let o,l;try{o=zi(n).toUint8Array()}catch(c){if(c instanceof np)return dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new mu(o,r,s)}catch(c){return dr(c instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach((s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(t,s,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Lc(l.target)){const c=new Oe(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,cn.newNoDocument(c,e))}s.Be&&(t.set(o,s.ke()),s.Ke())}}));let n=dt();this.Je.forEach(((s,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const r=new Ia(e,t,this.Ze,this.je,n);return this.je=Hi(),this.He=Go(),this.Je=Go(),this.Ze=new Ut(st),r}Ye(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,n),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new wf,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Xt(st),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Xt(st),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wf),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Go(){return new Ut(Oe.comparator)}function Rf(){return new Ut(Oe.comparator)}const ET={asc:"ASCENDING",desc:"DESCENDING"},ST={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TT={and:"AND",or:"OR"};class MT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oc(i,e){return i.useProto3Json||Ta(e)?e:{value:e}}function AT(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bT(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Xr(i){return It(!!i,49232),qe.fromTimestamp((function(t){const n=ki(t);return new kt(n.seconds,n.nanos)})(i))}function wT(i,e){return Vc(i,e).canonicalString()}function Vc(i,e){const t=(function(r){return new Rt(["projects",r.projectId,"databases",r.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Ap(i){const e=Rt.fromString(i);return It(Ip(e),10190,{key:e.toString()}),e}function Sl(i,e){const t=Ap(e);if(t.get(1)!==i.databaseId.projectId)throw new Ue(ue.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Ue(ue.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Oe(wp(t))}function bp(i,e){return wT(i.databaseId,e)}function RT(i){const e=Ap(i);return e.length===4?Rt.emptyPath():wp(e)}function Cf(i){return new Rt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function wp(i){return It(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function CT(i,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:je(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=(function(u,h){return u.useProto3Json?(It(h===void 0||typeof h=="string",58123),tn.fromBase64String(h||"")):(It(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),tn.fromUint8Array(h||new Uint8Array))})(i,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const h=u.code===void 0?ue.UNKNOWN:Sp(u.code);return new Ue(h,u.message||"")})(o);t=new Mp(n,r,s,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=Sl(i,n.document.name),s=Xr(n.document.updateTime),o=n.document.createTime?Xr(n.document.createTime):qe.min(),l=new Bn({mapValue:{fields:n.document.fields}}),c=cn.newFoundDocument(r,s,o,l),u=n.targetIds||[],h=n.removedTargetIds||[];t=new Zo(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=Sl(i,n.document),s=n.readTime?Xr(n.readTime):qe.min(),o=cn.newNoDocument(r,s),l=n.removedTargetIds||[];t=new Zo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=Sl(i,n.document),s=n.removedTargetIds||[];t=new Zo([],s,r,null)}else{if(!("filter"in e))return je(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new _T(r,s),l=n.targetId;t=new Tp(l,o)}}return t}function IT(i,e){return{documents:[bp(i,e.path)]}}function PT(i,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=bp(i,r);const s=(function(u){if(u.length!==0)return Cp(Kn.create(u,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:kr(p.field),direction:NT(p.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Oc(i,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:r}}function DT(i){let e=RT(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){It(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=(function(d){const p=Rp(d);return p instanceof Kn&&cp(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(d){return d.map((p=>(function(b){return new ua(zr(b.field),(function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(b.direction))})(p)))})(t.orderBy));let l=null;t.limit&&(l=(function(d){let p;return p=typeof d=="object"?d.value:d,Ta(p)?null:p})(t.limit));let c=null;t.startAt&&(c=(function(d){const p=!!d.before,v=d.values||[];return new ca(v,p)})(t.startAt));let u=null;return t.endAt&&(u=(function(d){const p=!d.before,v=d.values||[];return new ca(v,p)})(t.endAt)),KS(e,r,o,s,l,"F",c,u)}function LT(i,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return je(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rp(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=zr(t.unaryFilter.field);return Wt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=zr(t.unaryFilter.field);return Wt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zr(t.unaryFilter.field);return Wt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zr(t.unaryFilter.field);return Wt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return je(61313);default:return je(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Wt.create(zr(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return je(58110);default:return je(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((n=>Rp(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return je(1026)}})(t.compositeFilter.op))})(i):je(30097,{filter:i})}function NT(i){return ET[i]}function UT(i){return ST[i]}function FT(i){return TT[i]}function kr(i){return{fieldPath:i.canonicalString()}}function zr(i){return pn.fromServerFormat(i.fieldPath)}function Cp(i){return i instanceof Wt?(function(t){if(t.op==="=="){if(gf(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NAN"}};if(mf(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gf(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NAN"}};if(mf(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(t.field),op:UT(t.op),value:t.value}}})(i):i instanceof Kn?(function(t){const n=t.getFilters().map((r=>Cp(r)));return n.length===1?n[0]:{compositeFilter:{op:FT(t.op),filters:n}}})(i):je(54877,{filter:i})}function Ip(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}class Pi{constructor(e,t,n,r,s=qe.min(),o=qe.min(),l=tn.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class OT{constructor(e){this.yt=e}}function VT(i){const e=DT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Nc(e,e.limit,"L"):e}class BT{constructor(){this.Sn=new kT}addToCollectionParentIndex(e,t){return this.Sn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(Bi.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(Bi.min())}updateCollectionGroup(e,t,n){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class kT{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Xt(Rt.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Xt(Rt.comparator)).toArray()}}const If={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pp=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(Pp,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);class ns{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ns(0)}static ar(){return new ns(-1)}}const Pf="LruGarbageCollector",zT=1048576;function Df([i,e],[t,n]){const r=st(i,t);return r===0?st(e,n):r}class GT{constructor(e){this.Pr=e,this.buffer=new Xt(Df),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Df(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HT{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Ae(Pf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cs(t)?Ae(Pf,"Ignoring IndexedDB error during garbage collection: ",t):await Ea(t)}await this.Ar(3e5)}))}}class WT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return te.resolve(Sa.ce);const n=new GT(t);return this.Vr.forEachTarget(e,(r=>n.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>n.Er(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Ae("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(If)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),If):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,s,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(Ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(n=d,l=Date.now(),this.removeTargets(e,n,t)))).next((d=>(s=d,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((d=>(u=Date.now(),Vr()<=ut.DEBUG&&Ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:d}))))}}function XT(i,e){return new WT(i,e)}class qT{constructor(){this.changes=new pr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?te.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class $T{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class jT{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&ks(n.mutation,r,Ii.empty(),kt.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,dt()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=dt()){const r=ar();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((s=>{let o=Ls();return s.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=ar();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,dt())))}populateOverlays(e,t,n){const r=[];return n.forEach((s=>{t.has(s)||r.push(s)})),this.documentOverlayCache.getOverlays(e,r).next((s=>{s.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,n,r){let s=Hi();const o=Bs(),l=(function(){return Bs()})();return t.forEach(((c,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ca)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ks(h.mutation,u,h.mutation.getFieldMask(),kt.now())):o.set(u.key,Ii.empty())})),this.recalculateAndSaveOverlays(e,s).next((c=>(c.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>l.set(u,new $T(h,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,t){const n=Bs();let r=new Ut(((o,l)=>o-l)),s=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=t.get(c);if(u===null)return;let h=n.get(c)||Ii.empty();h=l.applyToLocalView(u,h),n.set(c,h);const d=(r.get(l.batchId)||dt()).add(c);r=r.insert(l.batchId,d)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=gp();h.forEach((p=>{if(!s.has(p)){const v=yp(t.get(p),n.get(p));v!==null&&d.set(p,v),s=s.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return te.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return QS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):JS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):te.resolve(ar());let l=js,c=s;return o.next((u=>te.forEach(u,((h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),s.get(h)?te.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{c=c.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,s))).next((()=>this.computeViews(e,c,u,dt()))).next((h=>({batchId:l,changes:iT(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Oe(t)).next((n=>{let r=Ls();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,s).next((l=>te.forEach(l,(c=>{const u=(function(d,p){return new Aa(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r)))).next((o=>{s.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,cn.newInvalidDocument(h)))}));let l=Ls();return o.forEach(((c,u)=>{const h=s.get(c);h!==void 0&&ks(h.mutation,u,Ii.empty(),kt.now()),wa(t,u)&&(l=l.insert(c,u))})),l}))}}class YT{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return te.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Xr(r.createTime)}})(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:VT(r.bundledQuery),readTime:Xr(r.readTime)}})(t)),te.resolve()}}class KT{constructor(){this.overlays=new Ut(Oe.comparator),this.Lr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ar();return te.forEach(t,(r=>this.getOverlay(e,r).next((s=>{s!==null&&n.set(r,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,s)=>{this.bt(e,t,s)})),te.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return r!==void 0&&(r.forEach((s=>this.overlays=this.overlays.remove(s))),this.Lr.delete(n)),te.resolve()}getOverlaysForCollection(e,t,n){const r=ar(),s=t.length+1,o=new Oe(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>n&&r.set(c.getKey(),c)}return te.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Ut(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=ar(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=ar(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>l.set(u,h))),!(l.size()>=r)););return te.resolve(l)}bt(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new gT(t,n));let s=this.Lr.get(t);s===void 0&&(s=dt(),this.Lr.set(t,s)),this.Lr.set(t,s.add(n.key))}}class QT{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}class gu{constructor(){this.kr=new Xt(Qt.Kr),this.qr=new Xt(Qt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new Qt(e,t);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new Qt(e,t))}Qr(e,t){e.forEach((n=>this.removeReference(n,t)))}Gr(e){const t=new Oe(new Rt([])),n=new Qt(t,e),r=new Qt(t,e+1),s=[];return this.qr.forEachInRange([n,r],(o=>{this.Wr(o),s.push(o.key)})),s}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Oe(new Rt([])),n=new Qt(t,e),r=new Qt(t,e+1);let s=dt();return this.qr.forEachInRange([n,r],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Qt(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Qt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return Oe.comparator(e.key,t.key)||st(e.Hr,t.Hr)}static Ur(e,t){return st(e.Hr,t.Hr)||Oe.comparator(e.key,t.key)}}class JT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Xt(Qt.Kr)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mT(s,t,n,r);this.mutationQueue.push(o);for(const l of r)this.Jr=this.Jr.add(new Qt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return te.resolve(o)}lookupMutationBatch(e,t){return te.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),s=r<0?0:r;return te.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?RS:this.Yn-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Qt(t,0),r=new Qt(t,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([n,r],(o=>{const l=this.Zr(o.Hr);s.push(l)})),te.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Xt(st);return t.forEach((r=>{const s=new Qt(r,0),o=new Qt(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],(l=>{n=n.add(l.Hr)}))})),te.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Oe.isDocumentKey(s)||(s=s.child(""));const o=new Qt(new Oe(s),0);let l=new Xt(st);return this.Jr.forEachWhile((c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Hr)),!0)}),o),te.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach((n=>{const r=this.Zr(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){It(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Jr;return te.forEach(t.mutations,(r=>{const s=new Qt(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Jr=n}))}nr(e){}containsKey(e,t){const n=new Qt(t,0),r=this.Jr.firstAfterOrEqual(n);return te.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class ZT{constructor(e){this.ti=e,this.docs=(function(){return new Ut(Oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,o=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return te.resolve(n?n.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let n=Hi();return t.forEach((r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():cn.newInvalidDocument(r))})),te.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=Hi();const o=t.path,l=new Oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||MS(TS(h),n)<=0||(r.has(h.key)||wa(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return te.resolve(s)}getAllFromCollectionGroup(e,t,n,r){je(9500)}ni(e,t){return te.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new eM(this)}getSize(e){return te.resolve(this.size)}}class eM extends qT{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)})),te.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}class tM{constructor(e){this.persistence=e,this.ri=new pr((t=>uu(t)),hu),this.lastRemoteSnapshotVersion=qe.min(),this.highestTargetId=0,this.ii=0,this.si=new gu,this.targetCount=0,this.oi=ns._r()}forEachTarget(e,t){return this.ri.forEach(((n,r)=>t(r))),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),te.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.lr(t),te.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ri.forEach(((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),te.waitFor(s).next((()=>r))}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return te.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),te.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((o=>{s.push(r.markPotentiallyOrphaned(e,o))})),te.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),te.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return te.resolve(n)}containsKey(e,t){return te.resolve(this.si.containsKey(t))}}class Dp{constructor(e,t){this._i={},this.overlays={},this.ai=new Sa(0),this.ui=!1,this.ui=!0,this.ci=new QT,this.referenceDelegate=e(this),this.li=new tM(this),this.indexManager=new BT,this.remoteDocumentCache=(function(r){return new ZT(r)})((n=>this.referenceDelegate.hi(n))),this.serializer=new OT(t),this.Pi=new YT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new KT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new JT(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Ae("MemoryPersistence","Starting transaction:",e);const r=new nM(this.ai.next());return this.referenceDelegate.Ti(),n(r).next((s=>this.referenceDelegate.Ii(r).next((()=>s)))).toPromise().then((s=>(r.raiseOnCommittedEvent(),s)))}Ei(e,t){return te.or(Object.values(this._i).map((n=>()=>n.containsKey(e,t))))}}class nM extends bS{constructor(e){super(),this.currentSequenceNumber=e}}class _u{constructor(e){this.persistence=e,this.Ri=new gu,this.Ai=null}static Vi(e){return new _u(e)}get di(){if(this.Ai)return this.Ai;throw je(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),te.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),te.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((s=>this.di.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.di,(n=>{const r=Oe.fromPath(n);return this.mi(e,r).next((s=>{s||t.removeEntry(r,qe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return te.or([()=>te.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class da{constructor(e,t){this.persistence=e,this.fi=new pr((n=>CS(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=XT(this,t)}static Vi(e,t){return new da(e,t)}Ti(){}Ii(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}pr(e){let t=0;return this.mr(e,(n=>{t++})).next((()=>t))}mr(e,t){return te.forEach(this.fi,((n,r)=>this.wr(e,n,r).next((s=>s?te.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(e,(o=>this.wr(e,o,t).next((l=>{l||(n++,s.removeEntry(o,qe.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),te.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),te.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qo(e.data.value)),t}wr(e,t,n){return te.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return te.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class vu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Is=r}static Es(e,t){let n=dt(),r=dt();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new vu(e,t.fromCache,n,r)}}class iM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class rM{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Gy()?8:wS(ky())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.gs(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ps(e,t,r,n).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new iM;return this.ys(e,t,o).next((l=>{if(s.result=l,this.As)return this.ws(e,t,o,l.size)}))})).next((()=>s.result))}ws(e,t,n,r){return n.documentReadCount<this.Vs?(Vr()<=ut.DEBUG&&Ae("QueryEngine","SDK will not create cache indexes for query:",Br(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),te.resolve()):(Vr()<=ut.DEBUG&&Ae("QueryEngine","Query:",Br(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Vr()<=ut.DEBUG&&Ae("QueryEngine","The SDK decides to create cache indexes for query:",Br(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qn(t))):te.resolve())}gs(e,t){if(yf(t))return te.resolve(null);let n=qn(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Nc(t,null,"F"),n=qn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const o=dt(...s);return this.fs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,n).next((c=>{const u=this.bs(t,l);return this.Ss(t,u,o,c.readTime)?this.gs(e,Nc(t,null,"F")):this.Ds(e,u,t,c)}))))})))))}ps(e,t,n,r){return yf(t)||r.isEqual(qe.min())?te.resolve(null):this.fs.getDocuments(e,n).next((s=>{const o=this.bs(t,s);return this.Ss(t,o,n,r)?te.resolve(null):(Vr()<=ut.DEBUG&&Ae("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Br(t)),this.Ds(e,o,t,SS(r,js)).next((l=>l)))}))}bs(e,t){let n=new Xt(pp(e));return t.forEach(((r,s)=>{wa(e,s)&&(n=n.add(s))})),n}Ss(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(e,t,n){return Vr()<=ut.DEBUG&&Ae("QueryEngine","Using full collection scan to execute query:",Br(t)),this.fs.getDocumentsMatchingQuery(e,t,Bi.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}const xu="LocalStore",sM=3e8;class oM{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Ut(st),this.Fs=new pr((s=>uu(s)),hu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jT(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function aM(i,e,t,n){return new oM(i,e,t,n)}async function Lp(i,e){const t=ht(i);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((s=>(r=s,t.Os(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const o=[],l=[];let c=dt();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function Np(i){const e=ht(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function lM(i,e){const t=ht(i),n=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach(((h,d)=>{const p=r.get(d);if(!p)return;l.push(t.li.removeMatchingKeys(s,h.removedDocuments,d).next((()=>t.li.addMatchingKeys(s,h.addedDocuments,d))));let v=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?v=v.withResumeToken(tn.EMPTY_BYTE_STRING,qe.min()).withLastLimboFreeSnapshotVersion(qe.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,n)),r=r.insert(d,v),(function(R,y,g){return R.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=sM?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0})(p,v,h)&&l.push(t.li.updateTargetData(s,v))}));let c=Hi(),u=dt();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))})),l.push(cM(s,o,e.documentUpdates).next((h=>{c=h.Bs,u=h.Ls}))),!n.isEqual(qe.min())){const h=t.li.getLastRemoteSnapshotVersion(s).next((d=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,n)));l.push(h)}return te.waitFor(l).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,c,u))).next((()=>c))})).then((s=>(t.vs=r,s)))}function cM(i,e,t){let n=dt(),r=dt();return t.forEach((s=>n=n.add(s))),e.getEntries(i,n).next((s=>{let o=Hi();return t.forEach(((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(qe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Ae(xu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Bs:o,Ls:r}}))}function uM(i,e){const t=ht(i);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.li.getTargetData(n,e).next((s=>s?(r=s,te.resolve(r)):t.li.allocateTargetId(n).next((o=>(r=new Pi(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.vs.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n}))}async function Bc(i,e,t){const n=ht(i),r=n.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!cs(o))throw o;Ae(xu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.vs=n.vs.remove(e),n.Fs.delete(r.target)}function Lf(i,e,t){const n=ht(i);let r=qe.min(),s=dt();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const d=ht(c),p=d.Fs.get(h);return p!==void 0?te.resolve(d.vs.get(p)):d.li.getTargetData(u,h)})(n,o,qn(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(o,l.targetId).next((c=>{s=c}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?r:qe.min(),t?s:dt()))).next((l=>(hM(n,eT(e),l),{documents:l,ks:s})))))}function hM(i,e,t){let n=i.Ms.get(e)||qe.min();t.forEach(((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),i.Ms.set(e,n)}class Nf{constructor(){this.activeTargetIds=oT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fM{constructor(){this.vo=new Nf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Nf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class dM{Mo(e){}shutdown(){}}const Uf="ConnectivityMonitor";class Ff{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Ae(Uf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Ae(Uf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}let Ho=null;function kc(){return Ho===null?Ho=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ho++,"0x"+Ho.toString(16)}const Tl="RestConnection",pM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class mM{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===la?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,s){const o=kc(),l=this.Qo(e,t.toUriEncodedString());Ae(Tl,`Sending RPC '${e}' ${o}:`,l,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,s);const{host:u}=new URL(l),h=iu(u);return this.zo(e,l,c,n,h).then((d=>(Ae(Tl,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw dr(Tl,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",n),d}))}jo(e,t,n,r,s,o){return this.Wo(e,t,n,r,s)}Go(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ls})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,s)=>e[s]=r)),n&&n.headers.forEach(((r,s)=>e[s]=r))}Qo(e,t){const n=pM[e];let r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}class gM{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}const an="WebChannelConnection",Cs=(i,e,t)=>{i.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class qr extends mM{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qr.c_){const e=Kd();Cs(e,Yd.STAT_EVENT,(t=>{t.stat===Ac.PROXY?Ae(an,"STAT_EVENT: detected buffering proxy"):t.stat===Ac.NOPROXY&&Ae(an,"STAT_EVENT: detected no buffering proxy")})),qr.c_=!0}}zo(e,t,n,r,s){const o=kc();return new Promise(((l,c)=>{const u=new $d;u.setWithCredentials(!0),u.listenOnce(jd.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const d=u.getResponseJson();Ae(an,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Ko.TIMEOUT:Ae(an,`RPC '${e}' ${o} timed out`),c(new Ue(ue.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const p=u.getStatus();if(Ae(an,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const b=v?.error;if(b&&b.status&&b.message){const R=(function(g){const D=g.toLowerCase().replace(/_/g,"-");return Object.values(ue).indexOf(D)>=0?D:ue.UNKNOWN})(b.status);c(new Ue(R,b.message))}else c(new Ue(ue.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Ue(ue.UNAVAILABLE,"Connection failed."));break;default:je(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Ae(an,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);Ae(an,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,n,15)}))}T_(e,t,n){const r=kc(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const u=s.join("");Ae(an,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);this.I_(h);let d=!1,p=!1;const v=new gM({Ho:b=>{p?Ae(an,`Not sending because RPC '${e}' stream ${r} is closed:`,b):(d||(Ae(an,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),Ae(an,`RPC '${e}' stream ${r} sending:`,b),h.send(b))},Jo:()=>h.close()});return Cs(h,Ds.EventType.OPEN,(()=>{p||(Ae(an,`RPC '${e}' stream ${r} transport opened.`),v.i_())})),Cs(h,Ds.EventType.CLOSE,(()=>{p||(p=!0,Ae(an,`RPC '${e}' stream ${r} transport closed`),v.o_(),this.E_(h))})),Cs(h,Ds.EventType.ERROR,(b=>{p||(p=!0,dr(an,`RPC '${e}' stream ${r} transport errored. Name:`,b.name,"Message:",b.message),v.o_(new Ue(ue.UNAVAILABLE,"The operation could not be completed")))})),Cs(h,Ds.EventType.MESSAGE,(b=>{if(!p){const R=b.data[0];It(!!R,16349);const y=R,g=y?.error||y[0]?.error;if(g){Ae(an,`RPC '${e}' stream ${r} received error:`,g);const D=g.status;let N=(function(F){const S=Bt[F];if(S!==void 0)return Sp(S)})(D),L=g.message;D==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&dr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=ue.INTERNAL,L="Unknown error status: "+D+" with message "+g.message),p=!0,v.o_(new Ue(N,L)),h.close()}else Ae(an,`RPC '${e}' stream ${r} received:`,R),v.__(R)}})),qr.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Qd()}}function _M(i){return new qr(i)}function Ml(){return typeof document<"u"?document:null}function Up(i){return new MT(i,!0)}qr.c_=!1;class Fp{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Ae("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}const Of="PersistentStream";class vM{constructor(e,t,n,r,s,o,l,c){this.Ci=e,this.b_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===ue.RESOURCE_EXHAUSTED?(di(t.toString()),di("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ue.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.D_===t&&this.G_(n,r)}),(n=>{e((()=>{const r=new Ue(ue.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)}))}))}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{n((()=>this.z_(r)))})),this.stream.onMessage((r=>{n((()=>++this.F_==1?this.H_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Ae(Of,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(Ae(Of,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xM extends vM{constructor(e,t,n,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=CT(this.serializer,e),n=(function(s){if(!("targetChange"in s))return qe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?qe.min():o.readTime?Xr(o.readTime):qe.min()})(e);return this.listener.J_(t,n)}Z_(e){const t={};t.database=Cf(this.serializer),t.addTarget=(function(s,o){let l;const c=o.target;if(l=Lc(c)?{documents:IT(s,c)}:{query:PT(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bT(s,o.resumeToken);const u=Oc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(qe.min())>0){l.readTime=AT(s,o.snapshotVersion.toTimestamp());const u=Oc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const n=LT(this.serializer,e);n&&(t.labels=n),this.K_(t)}X_(e){const t={};t.database=Cf(this.serializer),t.removeTarget=e,this.K_(t)}}class yM{}class EM extends yM{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Ue(ue.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,Vc(t,n),r,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ue(ue.UNKNOWN,s.toString())}))}jo(e,t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.jo(e,Vc(t,n),r,o,l,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ue(ue.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function SM(i,e,t,n){return new EM(i,e,t,n)}class TM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(di(t),this.aa=!1):Ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}const is="RemoteStore";class MM{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo((o=>{n.enqueueAndForget((async()=>{oo(this)&&(Ae(is,"Restarting streams for network reachability change."),await(async function(c){const u=ht(c);u.Ea.add(4),await so(u),u.Va.set("Unknown"),u.Ea.delete(4),await Pa(u)})(this))}))})),this.Va=new TM(n,r)}}async function Pa(i){if(oo(i))for(const e of i.Ra)await e(!0)}async function so(i){for(const e of i.Ra)await e(!1)}function Op(i,e){const t=ht(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Tu(t)?Su(t):us(t).O_()&&Eu(t,e))}function yu(i,e){const t=ht(i),n=us(t);t.Ia.delete(e),n.O_()&&Vp(t,e),t.Ia.size===0&&(n.O_()?n.L_():oo(t)&&t.Va.set("Unknown"))}function Eu(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(qe.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}us(i).Z_(e)}function Vp(i,e){i.da.$e(e),us(i).X_(e)}function Su(i){i.da=new yT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),us(i).start(),i.Va.ua()}function Tu(i){return oo(i)&&!us(i).x_()&&i.Ia.size>0}function oo(i){return ht(i).Ea.size===0}function Bp(i){i.da=void 0}async function AM(i){i.Va.set("Online")}async function bM(i){i.Ia.forEach(((e,t)=>{Eu(i,e)}))}async function wM(i,e){Bp(i),Tu(i)?(i.Va.ha(e),Su(i)):i.Va.set("Unknown")}async function RM(i,e,t){if(i.Va.set("Online"),e instanceof Mp&&e.state===2&&e.cause)try{await(async function(r,s){const o=s.cause;for(const l of s.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.da.removeTarget(l))})(i,e)}catch(n){Ae(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Vf(i,n)}else if(e instanceof Zo?i.da.Xe(e):e instanceof Tp?i.da.st(e):i.da.tt(e),!t.isEqual(qe.min()))try{const n=await Np(i.localStore);t.compareTo(n)>=0&&await(function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.Ia.get(u);h&&s.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const h=s.Ia.get(c);if(!h)return;s.Ia.set(c,h.withResumeToken(tn.EMPTY_BYTE_STRING,h.snapshotVersion)),Vp(s,c);const d=new Pi(h.target,c,u,h.sequenceNumber);Eu(s,d)})),s.remoteSyncer.applyRemoteEvent(l)})(i,t)}catch(n){Ae(is,"Failed to raise snapshot:",n),await Vf(i,n)}}async function Vf(i,e,t){if(!cs(e))throw e;i.Ea.add(1),await so(i),i.Va.set("Offline"),t||(t=()=>Np(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{Ae(is,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Pa(i)}))}async function Bf(i,e){const t=ht(i);t.asyncQueue.verifyOperationInProgress(),Ae(is,"RemoteStore received new credentials");const n=oo(t);t.Ea.add(3),await so(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Pa(t)}async function CM(i,e){const t=ht(i);e?(t.Ea.delete(2),await Pa(t)):e||(t.Ea.add(2),await so(t),t.Va.set("Unknown"))}function us(i){return i.ma||(i.ma=(function(t,n,r){const s=ht(t);return s.sa(),new xM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)})(i.datastore,i.asyncQueue,{Zo:AM.bind(null,i),Yo:bM.bind(null,i),t_:wM.bind(null,i),J_:RM.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),Tu(i)?Su(i):i.Va.set("Unknown")):(await i.ma.stop(),Bp(i))}))),i.ma}class Mu{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const o=Date.now()+n,l=new Mu(e,t,o,r,s);return l.start(n),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ue(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kp(i,e){if(di("AsyncQueue",`${e}: ${i}`),cs(i))return new Ue(ue.UNAVAILABLE,`${e}: ${i}`);throw i}class $r{static emptySet(e){return new $r(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Oe.comparator(t.key,n.key):(t,n)=>Oe.comparator(t.key,n.key),this.keyedMap=Ls(),this.sortedSet=new Ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $r)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new $r;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}class kf{constructor(){this.ga=new Ut(Oe.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):je(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class rs{constructor(e,t,n,r,s,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,s){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new rs(e,t,$r.emptySet(t),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}class IM{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class PM{constructor(){this.queries=zf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=ht(t),s=r.queries;r.queries=zf(),s.forEach(((o,l)=>{for(const c of l.ba)c.onError(n)}))})(this,new Ue(ue.ABORTED,"Firestore shutting down"))}}function zf(){return new pr((i=>dp(i)),ba)}async function DM(i,e){const t=ht(i);let n=3;const r=e.query;let s=t.queries.get(r);s?!s.Sa()&&e.Da()&&(n=2):(s=new IM,n=e.Da()?0:1);try{switch(n){case 0:s.wa=await t.onListen(r,!0);break;case 1:s.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const l=kp(o,`Initialization of query '${Br(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,s),s.ba.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Au(t)}async function LM(i,e){const t=ht(i),n=e.query;let r=3;const s=t.queries.get(n);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?r=e.Da()?0:1:!s.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function NM(i,e){const t=ht(i);let n=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const l of o.ba)l.Fa(r)&&(n=!0);o.wa=r}}n&&Au(t)}function UM(i,e,t){const n=ht(i),r=n.queries.get(e);if(r)for(const s of r.ba)s.onError(t);n.queries.delete(e)}function Au(i){i.Ca.forEach((e=>{e.next()}))}var zc,Gf;(Gf=zc||(zc={})).Ma="default",Gf.Cache="cache";class FM{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new rs(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.Ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==zc.Cache}}class zp{constructor(e){this.key=e}}class Gp{constructor(e){this.key=e}}class OM{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=dt(),this.mutatedKeys=dt(),this.eu=pp(e),this.tu=new $r(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new kf,r=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,d)=>{const p=r.get(h),v=wa(this.query,d)?d:null,b=!!p&&this.mutatedKeys.has(p.key),R=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let y=!1;p&&v?p.data.isEqual(v.data)?b!==R&&(n.track({type:3,doc:v}),y=!0):this.su(p,v)||(n.track({type:2,doc:v}),y=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!p&&v?(n.track({type:0,doc:v}),y=!0):p&&!v&&(n.track({type:1,doc:p}),y=!0,(c||u)&&(l=!0)),y&&(v?(o=o.add(v),s=R?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{tu:o,iu:n,Ss:l,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,d)=>(function(v,b){const R=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return je(20277,{Vt:y})}};return R(v)-R(b)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(n),r=r??!1;const l=t&&!r?this._u():[],c=this.Ya.size===0&&this.current&&!r?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new rs(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=dt(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const t=[];return e.forEach((n=>{this.Ya.has(n)||t.push(new Gp(n))})),this.Ya.forEach((n=>{e.has(n)||t.push(new zp(n))})),t}cu(e){this.Za=e.ks,this.Ya=dt();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const bu="SyncEngine";class VM{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class BM{constructor(e){this.key=e,this.hu=!1}}class kM{constructor(e,t,n,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new pr((l=>dp(l)),ba),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ut(Oe.comparator),this.Au=new Map,this.Vu=new gu,this.du={},this.mu=new Map,this.fu=ns.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zM(i,e,t=!0){const n=$p(i);let r;const s=n.Tu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.lu()):r=await Hp(n,e,t,!0),r}async function GM(i,e){const t=$p(i);await Hp(t,e,!0,!1)}async function Hp(i,e,t,n){const r=await uM(i.localStore,qn(e)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,t);let l;return n&&(l=await HM(i,e,s,o==="current",r.resumeToken)),i.isPrimaryClient&&t&&Op(i.remoteStore,r),l}async function HM(i,e,t,n,r){i.pu=(d,p,v)=>(async function(R,y,g,D){let N=y.view.ru(g);N.Ss&&(N=await Lf(R.localStore,y.query,!1).then((({documents:S})=>y.view.ru(S,N))));const L=D&&D.targetChanges.get(y.targetId),U=D&&D.targetMismatches.get(y.targetId)!=null,F=y.view.applyChanges(N,R.isPrimaryClient,L,U);return Wf(R,y.targetId,F.au),F.snapshot})(i,d,p,v);const s=await Lf(i.localStore,e,!0),o=new OM(e,s.ks),l=o.ru(s.documents),c=ro.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",r),u=o.applyChanges(l,i.isPrimaryClient,c);Wf(i,t,u.au);const h=new VM(e,t,o);return i.Tu.set(e,h),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),u.snapshot}async function WM(i,e,t){const n=ht(i),r=n.Tu.get(e),s=n.Iu.get(r.targetId);if(s.length>1)return n.Iu.set(r.targetId,s.filter((o=>!ba(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&yu(n.remoteStore,r.targetId),Gc(n,r.targetId)})).catch(Ea)):(Gc(n,r.targetId),await Bc(n.localStore,r.targetId,!0))}async function XM(i,e){const t=ht(i),n=t.Tu.get(e),r=t.Iu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),yu(t.remoteStore,n.targetId))}async function Wp(i,e){const t=ht(i);try{const n=await lM(t.localStore,e);e.targetChanges.forEach(((r,s)=>{const o=t.Au.get(s);o&&(It(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?It(o.hu,14607):r.removedDocuments.size>0&&(It(o.hu,42227),o.hu=!1))})),await qp(t,n,e)}catch(n){await Ea(n)}}function Hf(i,e,t){const n=ht(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach(((s,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const c=ht(o);c.onlineState=l;let u=!1;c.queries.forEach(((h,d)=>{for(const p of d.ba)p.va(l)&&(u=!0)})),u&&Au(c)})(n.eventManager,e),r.length&&n.Pu.J_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function qM(i,e,t){const n=ht(i);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),s=r&&r.key;if(s){let o=new Ut(Oe.comparator);o=o.insert(s,cn.newNoDocument(s,qe.min()));const l=dt().add(s),c=new Ia(qe.min(),new Map,new Ut(st),o,l);await Wp(n,c),n.Ru=n.Ru.remove(s),n.Au.delete(e),wu(n)}else await Bc(n.localStore,e,!1).then((()=>Gc(n,e,t))).catch(Ea)}function Gc(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Iu.get(e))i.Tu.delete(n),t&&i.Pu.yu(n,t);i.Iu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((n=>{i.Vu.containsKey(n)||Xp(i,n)}))}function Xp(i,e){i.Eu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(yu(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),wu(i))}function Wf(i,e,t){for(const n of t)n instanceof zp?(i.Vu.addReference(n.key,e),$M(i,n)):n instanceof Gp?(Ae(bu,"Document no longer in limbo: "+n.key),i.Vu.removeReference(n.key,e),i.Vu.containsKey(n.key)||Xp(i,n.key)):je(19791,{wu:n})}function $M(i,e){const t=e.key,n=t.path.canonicalString();i.Ru.get(t)||i.Eu.has(n)||(Ae(bu,"New document in limbo: "+t),i.Eu.add(n),wu(i))}function wu(i){for(;i.Eu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new Oe(Rt.fromString(e)),n=i.fu.next();i.Au.set(n,new BM(t)),i.Ru=i.Ru.insert(t,n),Op(i.remoteStore,new Pi(qn(fu(t.path)),n,"TargetPurposeLimboResolution",Sa.ce))}}async function qp(i,e,t){const n=ht(i),r=[],s=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((l,c)=>{o.push(n.pu(c,e,t).then((u=>{if((u||t)&&n.isPrimaryClient){const h=u?!u.fromCache:t?.targetChanges.get(c.targetId)?.current;n.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){r.push(u);const h=vu.Es(c.targetId,u);s.push(h)}})))})),await Promise.all(o),n.Pu.J_(r),await(async function(c,u){const h=ht(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>te.forEach(u,(p=>te.forEach(p.Ts,(v=>h.persistence.referenceDelegate.addReference(d,p.targetId,v))).next((()=>te.forEach(p.Is,(v=>h.persistence.referenceDelegate.removeReference(d,p.targetId,v)))))))))}catch(d){if(!cs(d))throw d;Ae(xu,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const v=h.vs.get(p),b=v.snapshotVersion,R=v.withLastLimboFreeSnapshotVersion(b);h.vs=h.vs.insert(p,R)}}})(n.localStore,s))}async function jM(i,e){const t=ht(i);if(!t.currentUser.isEqual(e)){Ae(bu,"User change. New user:",e.toKey());const n=await Lp(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((l=>{l.forEach((c=>{c.reject(new Ue(ue.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await qp(t,n.Ns)}}function YM(i,e){const t=ht(i),n=t.Au.get(e);if(n&&n.hu)return dt().add(n.key);{let r=dt();const s=t.Iu.get(e);if(!s)return r;for(const o of s){const l=t.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function $p(i){const e=ht(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qM.bind(null,e),e.Pu.J_=NM.bind(null,e.eventManager),e.Pu.yu=UM.bind(null,e.eventManager),e}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Up(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return aM(this.persistence,new rM,e.initialUser,this.serializer)}Cu(e){return new Dp(_u.Vi,this.serializer)}Du(e){return new fM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class KM extends pa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){It(this.persistence.referenceDelegate instanceof da,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new HT(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new Dp((n=>da.Vi(n,t)),this.serializer)}}class Hc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Hf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=jM.bind(null,this.syncEngine),await CM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new PM})()}createDatastore(e){const t=Up(e.databaseInfo.databaseId),n=_M(e.databaseInfo);return SM(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,s,o,l){return new MM(n,r,s,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Hf(this.syncEngine,t,0)),(function(){return Ff.v()?new Ff:new dM})())}createSyncEngine(e,t){return(function(r,s,o,l,c,u,h){const d=new kM(r,s,o,l,c,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=ht(t);Ae(is,"RemoteStore shutting down."),n.Ea.add(5),await so(n),n.Aa.shutdown(),n.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Hc.provider={build:()=>new Hc};class QM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):di("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}const Wi="FirestoreClient";class JM{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=ln.UNAUTHENTICATED,this.clientId=au.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async o=>{Ae(Wi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(Ae(Wi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=kp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Al(i,e){i.asyncQueue.verifyOperationInProgress(),Ae(Wi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener((async r=>{n.isEqual(r)||(await Lp(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Xf(i,e){i.asyncQueue.verifyOperationInProgress();const t=await ZM(i);Ae(Wi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((n=>Bf(e.remoteStore,n))),i.setAppCheckTokenChangeListener(((n,r)=>Bf(e.remoteStore,r))),i._onlineComponents=e}async function ZM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Ae(Wi,"Using user provided OfflineComponentProvider");try{await Al(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===ue.FAILED_PRECONDITION||r.code===ue.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await Al(i,new pa)}}else Ae(Wi,"Using default OfflineComponentProvider"),await Al(i,new KM(void 0));return i._offlineComponents}async function eA(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Ae(Wi,"Using user provided OnlineComponentProvider"),await Xf(i,i._uninitializedComponentsProvider._online)):(Ae(Wi,"Using default OnlineComponentProvider"),await Xf(i,new Hc))),i._onlineComponents}async function tA(i){const e=await eA(i),t=e.eventManager;return t.onListen=zM.bind(null,e.syncEngine),t.onUnlisten=WM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XM.bind(null,e.syncEngine),t}function nA(i,e,t={}){const n=new lr;return i.asyncQueue.enqueueAndForget((async()=>(function(s,o,l,c,u){const h=new QM({next:p=>{h.Nu(),o.enqueueAndForget((()=>LM(s,d)));const v=p.docs.has(l);!v&&p.fromCache?u.reject(new Ue(ue.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?u.reject(new Ue(ue.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new FM(fu(l.path),h,{includeMetadataChanges:!0,Ka:!0});return DM(s,d)})(await tA(i),i.asyncQueue,e,t,n))),n.promise}function jp(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}const iA="ComponentProvider",qf=new Map;function rA(i,e,t,n,r){return new LS(i,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,jp(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n)}const Yp="firestore.googleapis.com",$f=!0;class jf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Ue(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yp,this.ssl=$f}else this.host=e.host,this.ssl=e.ssl??$f;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zT)throw new Ue(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jp(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new Ue(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new Ue(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new Ue(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Da{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ue(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ue(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new cS;switch(n.type){case"firstParty":return new dS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ue(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=qf.get(t);n&&(Ae(iA,"Removing Datastore"),qf.delete(t),n.terminate())})(this),Promise.resolve()}}function sA(i,e,t,n={}){i=wc(i,Da);const r=iu(e),s=i._getSettings(),o={...s,emulatorOptions:i._getEmulatorOptions()},l=`${e}:${t}`;r&&(Uy(`https://${l}`),By("Firestore",!0)),s.host!==Yp&&s.host!==l&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:r,emulatorOptions:n};if(!sa(c,o)&&(i._setSettings(c),n.mockUserToken)){let u,h;if(typeof n.mockUserToken=="string")u=n.mockUserToken,h=ln.MOCK_USER;else{u=Fy(n.mockUserToken,i._app?.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new Ue(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ln(d)}i._authCredentials=new uS(new Zd(u,h))}}class Ru{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ru(this.firestore,e,this._query)}}class hn{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}toJSON(){return{type:hn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(no(t,hn._jsonSchema))return new hn(e,n||null,new Oe(Rt.fromString(t.referencePath)))}}hn._jsonSchemaVersion="firestore/documentReference/1.0",hn._jsonSchema={type:zt("string",hn._jsonSchemaVersion),referencePath:zt("string")};class Ui extends Ru{constructor(e,t,n){super(e,t,fu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new Oe(e))}withConverter(e){return new Ui(this.firestore,e,this._path)}}function oA(i,e,...t){if(i=ru(i),ep("collection","path",e),i instanceof Da){const n=Rt.fromString(e,...t);return af(n),new Ui(i,null,n)}{if(!(i instanceof hn||i instanceof Ui))throw new Ue(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Rt.fromString(e,...t));return af(n),new Ui(i.firestore,null,n)}}function aA(i,e,...t){if(i=ru(i),arguments.length===1&&(e=au.newId()),ep("doc","path",e),i instanceof Da){const n=Rt.fromString(e,...t);return of(n),new hn(i,null,new Oe(n))}{if(!(i instanceof hn||i instanceof Ui))throw new Ue(ue.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Rt.fromString(e,...t));return of(n),new hn(i.firestore,i instanceof Ui?i.converter:null,new Oe(n))}}const Yf="AsyncQueue";class Kf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fp(this,"async_queue_retry"),this._c=()=>{const n=Ml();n&&Ae(Yf,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=Ml();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ml();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new lr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!cs(e))throw e;Ae(Yf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,di("INTERNAL UNHANDLED ERROR: ",Qf(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Mu.createAndSchedule(this,e,t,n,(s=>this.hc(s)));return this.tc.push(r),r}uc(){this.nc&&je(47125,{Pc:Qf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qf(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Kp extends Da{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Kf,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kf(e),this._firestoreClient=void 0,await e}}}function lA(i,e){const t=typeof i=="object"?i:YE(),n=typeof i=="string"?i:la,r=WE(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=Ly("firestore");s&&sA(r,...s)}return r}function cA(i){if(i._terminated)throw new Ue(ue.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||uA(i),i._firestoreClient}function uA(i){const e=i._freezeSettings(),t=rA(i._databaseId,i._app?.options.appId||"",i._persistenceKey,i._app?.options.apiKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new JM(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(r){const s=r?._online.build();return{_offline:r?._offline.build(s),_online:s}})(i._componentsProvider))}class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(tn.fromBase64String(e))}catch(t){throw new Ue(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kn(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(no(e,kn._jsonSchema))return kn.fromBase64String(e.bytes)}}kn._jsonSchemaVersion="firestore/bytes/1.0",kn._jsonSchema={type:zt("string",kn._jsonSchemaVersion),bytes:zt("string")};class Qp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ue(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class Fi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ue(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ue(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return st(this._lat,e._lat)||st(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fi._jsonSchemaVersion}}static fromJSON(e){if(no(e,Fi._jsonSchema))return new Fi(e.latitude,e.longitude)}}Fi._jsonSchemaVersion="firestore/geoPoint/1.0",Fi._jsonSchema={type:zt("string",Fi._jsonSchemaVersion),latitude:zt("number"),longitude:zt("number")};class Oi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Oi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(no(e,Oi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Oi(e.vectorValues);throw new Ue(ue.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Oi._jsonSchemaVersion="firestore/vectorValue/1.0",Oi._jsonSchema={type:zt("string",Oi._jsonSchemaVersion),vectorValues:zt("object")};function Jp(i,e,t){if((e=ru(e))instanceof Qp)return e._internalPath;if(typeof e=="string")return fA(i,e);throw Wc("Field path arguments must be of type string or ",i)}const hA=new RegExp("[~\\*/\\[\\]]");function fA(i,e,t){if(e.search(hA)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Qp(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Wc(i,e,t,n,r){let s=`Function ${e}() called with invalid data`;s+=". ";let o="";return new Ue(ue.INVALID_ARGUMENT,s+i+o)}class dA{convertValue(e,t="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw je(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return io(e,((r,s)=>{n[r]=this.convertValue(s,t)})),n}convertVectorValue(e){const t=e.fields?.[Cc].arrayValue?.values?.map((n=>Lt(n.doubleValue)));return new Oi(t)}convertGeoPoint(e){return new Fi(Lt(e.latitude),Lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ma(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=ki(e);return new kt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Rt.fromString(e);It(Ip(n),9688,{name:e});const r=new Ks(n.get(1),n.get(3)),s=new Oe(n.popFirst(5));return r.isEqual(t)||di(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class pA extends dA{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,t)}}const Jf="@firebase/firestore",Zf="4.11.0";class Zp{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Jp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mA extends Zp{data(){return super.data()}}class Us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ur extends Zp{constructor(e,t,n,r,s,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Jp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ue(ue.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ur._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ur._jsonSchemaVersion="firestore/documentSnapshot/1.0",ur._jsonSchema={type:zt("string",ur._jsonSchemaVersion),bundleSource:zt("string","DocumentSnapshot"),bundleName:zt("string"),bundle:zt("string")};class ea extends ur{data(e={}){return super.data(e)}}class zs{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Us(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ea(this._firestore,this._userDataWriter,n.key,n,new Us(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ue(ue.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Us(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Us(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:gA(l.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ue(ue.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=au.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return je(61501,{type:i})}}zs._jsonSchemaVersion="firestore/querySnapshot/1.0",zs._jsonSchema={type:zt("string",zs._jsonSchemaVersion),bundleSource:zt("string","QuerySnapshot"),bundleName:zt("string"),bundle:zt("string")};function _A(i){i=wc(i,hn);const e=wc(i.firestore,Kp),t=cA(e);return nA(t,i._key).then((n=>vA(e,i,n)))}function vA(i,e,t){const n=t.docs.get(e._key),r=new pA(i);return new ur(i,r,e._key,n,new Us(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){lS(jE),aa(new qs("firestore",((n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new Kp(new hS(n.getProvider("auth-internal")),new pS(o,n.getProvider("app-check-internal")),NS(o,r),o);return s={useFetchStreams:t,...s},l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),Wr(Jf,Zf,e),Wr(Jf,Zf,"esm2020")})();const xA={apiKey:"AIzaSyCN3Z-SsOdmoFOLZP6NKiW9wDjMmA1M2bI",authDomain:"ipapps1.firebaseapp.com",projectId:"ipapps1",storageBucket:"ipapps1.firebasestorage.app",messagingSenderId:"386365310550",appId:"1:386365310550:web:959c17361a7daee6705df7"},yA=Hd(xA),EA=lA(yA),SA=oA(EA,"users");async function TA(i){if(i){const e=aA(SA,i);console.log(e);const t=await _A(e);if(t.exists())return t}return!1}async function MA(i,e){try{const t=await TA(i);if(t!==!1){const n=t.data(),r=n.password;if(e===r)return window.localStorage.setItem("Userdata",JSON.stringify(n)),window.location.href="./main.html",!0}}catch(t){console.error("Error getting user:",t)}return document.querySelector(".error").classList.remove("hidden"),!1}window.localStorage.getItem("Userdata")!==null&&(window.location.href="./main.html");localStorage.clear();document.addEventListener("DOMContentLoaded",function(){document.getElementById("login-submit").addEventListener("click",function(i){i.preventDefault();let e=document.getElementById("username").value,t=document.getElementById("password").value;console.log(e),MA(e,t),document.getElementById("username").value="",document.getElementById("password").value=""})});
