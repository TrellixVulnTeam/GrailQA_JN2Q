angular.module("Explorer").component("questionDetail",{templateUrl:"/GrailQA/explore/questionDetails.html",controller:function(){this.mp=model_predictions,this.preview_preds=function(){return model_predictions[this.model][this.question.qid]},this.len=Object.keys(model_predictions).length,this.genGraphs=function(){var e=this.question.qid,t=this.question.graph_query;$("#expanded_"+this.question.qid).on("shown.bs.modal",function(){console.log("Shown"),generate_graph(e,t)}),$("#expanded_"+this.question.qid).on("hide.bs.modal",function(){console.log("Hiding"),clear_graph(e)})},this.color_correct=function(e){var t="";"mouseenter"===e.type&&(t=this.preview_preds().answer.includes(e.target.innerText)?"correct":"incorrect"),e.target.className=t}},bindings:{question:"=",model:"="}});