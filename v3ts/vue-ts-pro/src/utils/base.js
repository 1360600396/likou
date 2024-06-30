//日期转int
import moment from 'moment';
export function timeToInt(time){
	if(time == undefined){
		return 0;
	}else if(time == ''){
		return 0;
	}else{
		return moment(time).unix();
	}
}
//int转日期
export function intToTime(n){
	console.log(n)
	if(n==0){
		return '';
	}else{
		return moment(n*1000).format('YYYY-MM-DD')
	}
}