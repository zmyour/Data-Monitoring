(self["webpackChunkDataMonitoring"]=self["webpackChunkDataMonitoring"]||[]).push([[723],{5574:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dslfp"},[i("div",[i("el-input",{staticClass:"add-to",attrs:{placeholder:"请输入名称",size:"small"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doAddRole.apply(null,arguments)}},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}},[i("template",{slot:"prepend"},[e._v("角色名称")])],2),i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.doAddRole}},[e._v("添加")])],1),i("div",[i("el-input",{staticClass:"add-to",attrs:{placeholder:"请输入名称",size:"small"},model:{value:e.filterGradeName,callback:function(t){e.filterGradeName=t},expression:"filterGradeName"}},[i("template",{slot:"prepend"},[e._v("角色名称")])],2),i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.filterGradeSearch}},[e._v("搜索")])],1),i("div",{staticClass:"permissManaMain"},[i("el-collapse",{attrs:{accordion:""},on:{change:e.change},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.roles,(function(t,s){return i("el-collapse-item",{key:s,attrs:{title:t.grade_name,name:t.id}},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("可访问资源")]),i("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"#ff0000"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.doDeleteRole(t)}}})],1),i("div",[i("el-tree",{key:s,ref:"tree",refInFor:!0,attrs:{"show-checkbox":"",data:e.allMenus,props:e.defaultProps,"default-checked-keys":e.selectedMenus,"node-key":"id"}}),i("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[i("el-button",{attrs:{size:"mini"},on:{click:e.canaelUpdate}},[e._v("取消修改")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.doUpdate(t.id,s)}}},[e._v("确认修改")])],1)],1)])],1)})),1)],1),i("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"20px"}},[i("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total","page-size":e.gradeSize,total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)])},a=[],r={name:"grade_list",data(){return{gradePage:1,gradeSize:10,total:0,input1:"",filterGradeName:"",gradeName:"",roles:[],allMenus:[],defaultProps:{children:"children",label:"name"},selectedMenus:[],activeName:-1,filter:""}},mounted(){this.initRoles()},methods:{sizeChange(e){this.gradeSize=e,this.initRoles()},currentChange(e){this.gradePage=e,this.initRoles()},doDeleteRole(e){this.$confirm("此操作将永久删除["+e.grade_name+"]角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.getRequest("/home/Grade/grade_delete/gradeid/"+e.id).then((e=>{200==e.code?(this.initRoles(),this.$message.success(e.success)):this.$message.error(e.error)}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},filterGradeSearch(){this.gradePage=1,this.gradeSize=10,this.filter="/gradeName/"+this.filterGradeName,console.log(this.filter),this.initRoles()},doAddRole(){this.getRequest("/home/Grade/grade_add/gradeName/"+this.input1).then((e=>{console.log(e),200==e.code?(this.$message.success(e.success),this.initRoles(),this.input1=""):this.$message.error(e.error)}))},canaelUpdate(){this.activeName=-1},doUpdate(e,t){let i=this.$refs.tree[t],s=i.getCheckedKeys(!0),a="";s.forEach((e=>{a+=","+e}));let r="/home/Grade/grade_update/id/"+e+"/menuGroup/"+a.replace(/^,+/,"").replace(/,+$/,"");this.putRequest(r).then((e=>{200==e.code?(this.$message.success(e.success),this.initRoles(),this.activeName=-1):this.$message.error(e.error)}))},change(e){e&&this.initAllMenus(e)},initAllMenus(e){this.roles.forEach((t=>{e==t.id&&t.permission&&(this.selectedMenus=t.permission.split(","))})),this.getRequest("/home/Sys/sys_menu_list").then((e=>{200==e.code&&(this.allMenus=this.objToArray(e.data))}))},initRoles(){let e="/home/Grade/grade_list/gradePage/"+this.gradePage+"/gradeSize/"+this.gradeSize+this.filter;console.log(e),this.getRequest(e).then((e=>{200==e.code&&(this.roles=e.data,this.total=e.count)}))},objToArray(e){let t=[];for(let i in e)if(t.push(e[i]),e[i].children&&e[i].children instanceof Object){let t=[];for(let s in e[i].children)if(t.push(e[i].children[s]),e[i].children[s].children&&e[i].children[s].children instanceof Object){let t=[];for(let a in e[i].children[s].children)t.push(e[i].children[s].children[a]);e[i]["children"][s]["children"]=t}e[i]["children"]=t}return t}}},n=r,l=i(1001),o=(0,l.Z)(n,s,a,!1,null,null,null),c=o.exports},1723:function(e,t,i){var s={"./grade_list.vue":5574};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=1723}}]);
//# sourceMappingURL=723.fe72e6f0.js.map