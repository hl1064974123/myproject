/*方法说明
 *@method guanbi
 *@for 
 *@param{string}id 绑定动画的元素id
 *@param{string}time 动画执行的时间
 *@return {null} 返回值说明
*/
function guanbi(id,time){
			var ele = document.getElementById(id);
			ele.style.setProperty("--div-width",ele.style.width);
			ele.style.setProperty("--div-animation-time",time);
			ele.style.setProperty("--div-height",ele.style.height);
			ele.style.setProperty("--div-top",parseInt(ele.style.height)/2+"px");
			ele.style.setProperty("--div-left",parseInt(ele.style.width)/2+"px");
			ele.className = ele.className.replace(/ kaishi/g,"")+" guanbi";;
			ele.addEventListener("animationend", function() {  
				//当前绑定的元素 动画执行完毕时，便会回调此方法
				console.log(ele.className);
				if(ele.className.search("guanbi")!=-1){
					console.log(ele.className);
					ele.style.display = "none";
				}
			});  
		}
/*方法说明
 *@method kaishi
 *@for 
 *@param{string}id 绑定动画的元素id
 *@param{string}time 动画执行的时间
 *@return {null} 返回值说明
*/
function kaishi(id,time){
	var ele = document.getElementById(id);
	ele.style.setProperty("--div-width",ele.style.width);
	ele.style.setProperty("--div-animation-time",time);
	ele.style.setProperty("--div-height",ele.style.height);
	ele.style.setProperty("--div-top",parseInt(ele.style.height)/2+"px");
	ele.style.setProperty("--div-left",parseInt(ele.style.width)/2+"px");
	ele.className = ele.className.replace(/ guanbi/g,"")+" kaishi";
	ele.style.display = "block";
}