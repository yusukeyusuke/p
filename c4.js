/**
 * 各Viewのインスタンス
 */
var thisView = {};

/**
 * Controller（中間層）のインスタンス
 */
var thisController = null;

/**
 * デバッググローバルオブジェクト
 */
var gb = null;

//予備モード：ON
var HARD_KEY_MODE_ON = 1;
// 予備モード：OFF
var HARD_KEY_MODE_OFF = 0;

// 予備モードの状態(デフォルトは通常モード)
var HARD_KEY_MODE = HARD_KEY_MODE_OFF;

// ハイライトカラー（デフォルトは透明）
var HIRIGHT_COLOR = "rgba(0,0,0,0)";

// プラグインより予備モードの状態を取得
try {
	HARD_KEY_MODE = config.IsHardKeyMode();

	// 予備モードがONの場合、ハイライトカラーを変更する
	if (HARD_KEY_MODE == HARD_KEY_MODE_ON) {
		HIRIGHT_COLOR = "rgba(255,255,0,1.0)";
	}

} catch (ex) {
	// 予備モード取得時のエラーは全て無視する
}

var sheet = document.styleSheets[0];
if(sheet.addRule) {
    alart("c4:addRule");
	sheet.addRule("*", "-webkit-tap-highlight-color:" + HIRIGHT_COLOR);
} else {
	sheet.insertRule("*{-webkit-tap-highlight-color:" + HIRIGHT_COLOR + ";}", sheet.cssRules.length);
}

/** 各種タイムアウト値 */
//磁気カード読み取り待ち時間
var TIMEOUT_MSCARD_READ = 3600000;
//ネットワークタイムアウト
var TIMEOUT_NETWORK = 300000;
//印字タイムアウト
var TIMEOUT_WAIT_PRINT = 60000;
//自動画面移動時のタイマ値
var SCREEN_MOVE_WAIT_TIMER = 2000;

/** エラーレベル */
var ERROR_LEVEL = "errorLevel";
/** エラーレベル:ワーニング */
var WARN = "WARN";
/** エラーレベル:業務エラー */
var ERROR = "ERROR";
/** エラーレベル:致命的な例外 */
var FATAL = "FATAL";

/** 障害伝票出力有無 */
var PRINT_BUGREPORT = "printBugReport";
/** 障害伝票出力有無：有り */
var PRINT_BUGREPORT_ON = "true";
/** 障害伝票出力有無：無し */
var PRINT_BUGREPORT_OFF = "false";

//クライアントバージョン情報
var CLIENT_VERSION_INFO = "1.0";

/**
 * どこぞで拾ってきた汎用ライブラリ
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
*@function Controlの結合を行います。第一引数のControlを親、第二引数のControlを子とし、親と子の両方にある要素は親が優先します。
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

	//実装
	for (var str in childControl) {
			parentControl[str] = childControl[str];
	}

	return parentControl;
};
