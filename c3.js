/**
 * ��View�Υ��󥹥���
 */
var thisView = {};

/**
 * Controller������ءˤΥ��󥹥���
 */
var thisController = null;

/**
 * �ǥХå������Х륪�֥�������
 */
var gb = null;

//ͽ���⡼�ɡ�ON
var HARD_KEY_MODE_ON = 1;
// ͽ���⡼�ɡ�OFF
var HARD_KEY_MODE_OFF = 0;

// ͽ���⡼�ɤξ���(�ǥե���Ȥ��̾�⡼��)
var HARD_KEY_MODE = HARD_KEY_MODE_OFF;

// �ϥ��饤�ȥ��顼�ʥǥե���Ȥ�Ʃ����
var HIRIGHT_COLOR = "rgba(0,0,0,0)";

// �ץ饰������ͽ���⡼�ɤξ��֤����
try {
	HARD_KEY_MODE = config.IsHardKeyMode();

	// ͽ���⡼�ɤ�ON�ξ�硢�ϥ��饤�ȥ��顼���ѹ�����
	if (HARD_KEY_MODE == HARD_KEY_MODE_ON) {
		HIRIGHT_COLOR = "rgba(255,255,0,1.0)";
	}

} catch (ex) {
	// ͽ���⡼�ɼ������Υ��顼������̵�뤹��
}

var sheet = document.styleSheets[0];
if(sheet.addRule) {
    alart("c3:addRule");
	sheet.addRule("*", "-webkit-tap-highlight-color:" + HIRIGHT_COLOR);
} else {
	sheet.insertRule("*{-webkit-tap-highlight-color:" + HIRIGHT_COLOR + ";}", sheet.cssRules.length);
}

/** �Ƽ勵���ॢ������ */
//�����������ɤ߼���Ԥ�����
var TIMEOUT_MSCARD_READ = 3600000;
//�ͥåȥ�������ॢ����
var TIMEOUT_NETWORK = 300000;
//���������ॢ����
var TIMEOUT_WAIT_PRINT = 60000;
//��ư���̰�ư���Υ�������
var SCREEN_MOVE_WAIT_TIMER = 2000;

/** ���顼��٥� */
var ERROR_LEVEL = "errorLevel";
/** ���顼��٥�:��˥� */
var WARN = "WARN";
/** ���顼��٥�:��̳���顼 */
var ERROR = "ERROR";
/** ���顼��٥�:��̿Ū���㳰 */
var FATAL = "FATAL";

/** �㳲��ɼ����̵ͭ */
var PRINT_BUGREPORT = "printBugReport";
/** �㳲��ɼ����̵ͭ��ͭ�� */
var PRINT_BUGREPORT_ON = "true";
/** �㳲��ɼ����̵ͭ��̵�� */
var PRINT_BUGREPORT_OFF = "false";

//���饤����ȥС���������
var CLIENT_VERSION_INFO = "1.0";

/**
 * �ɤ����ǽ��äƤ������ѥ饤�֥��
 * @param obj
 * @returns
 */
//copy from http://blog.void-main.org/develop/archives/24
var toJSON = function(obj) {
	var ret;
	// null or undefined
	if(obj == null) {
		return "null";
	}
	// array => [value, value, ...]
	if(obj.constructor === Array) {
		ret = "[";
		var comma = "";
		for(var i in obj) {
			ret += comma + toJSON(obj[i]);
			comma = ",";
		}
		return ret + "]";
	}
	// object => {"key":value, "key":value, ...}
	if(obj.constructor === Object) {
		ret = "{";
		var comma = "";
		for(var i in obj) {
			ret += comma + '"' + i + '":' + toJSON(obj[i]);
			comma = ",";
		}
		return ret + "}";
	}
	// number => 0
	if(obj.constructor === Number) {
		return "" + obj;
	}
	// boolean => true / false
	if(obj.constructor === Boolean) {
		return obj?"true": "false";
	}
	// string => "string"
	return '"' + obj + '"';
};
//copy from http://d.hatena.ne.jp/tanakahisateru/20081120/1227116140
function attrs_of(element) {
    if(element instanceof jQuery){ element = element.get(0); }
    var as = element.attributes;
    var props = {};
    for(var i = 0; i < as.length; i++){
        var a = as.item(i);
        if(a.specified){
            props[a.name] = a.value;
        }
    }
    return props;
};
/**
*@function Control�η���Ԥ��ޤ�����������Control��ơ����������Control��ҤȤ����ƤȻҤ�ξ���ˤ������ǤϿƤ�ͥ�褷�ޤ���
*
*/
function mergeControl(parentControl,childControl) {
	if (!parentControl || !childControl){
		if (parentControl) {
			return parentControl;
		} else if (childControl){
			return childControl;
		}
	}

	//����
	for (var str in childControl) {
			parentControl[str] = childControl[str];
	}

	return parentControl;
};
