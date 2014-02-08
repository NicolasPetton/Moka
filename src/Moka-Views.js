define("moka/Moka-Views", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "moka/Moka-Core"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Moka-Views');
smalltalk.packages["Moka-Views"].transport = {"type":"amd","amdNamespace":"moka"};

smalltalk.addClass('MKButtonView', globals.MKSingleAspectView, ['default', 'label', 'icon'], 'Moka-Views');
globals.MKButtonView.comment="I am a push button view. My default controller is `MKButtonController`.\x0a\x0aMy controller must answer to `#onPressed`.\x0a\x0a## API\x0a\x0a- Instances can be set a `default` button\x0a- Use `#label:` to set the label string";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=_st(stream).__lt_lt(globals.MKButtonView.superclass.fn.prototype._cssClass.apply(_st(self), []));
$ctx2.sendIdx["<<"]=2;
_st($2).__lt_lt(" mk_button");
$ctx2.sendIdx["<<"]=1;
$3=self._isDefault();
if(smalltalk.assert($3)){
return _st(stream).__lt_lt(" default");
};
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKButtonView)})},
args: [],
source: "cssClass\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream << super cssClass << ' mk_button'.\x0a\x09\x09self isDefault \x0a\x09\x09\x09ifTrue: [ stream << ' default' ] ]",
messageSends: ["streamContents:", "<<", "cssClass", "ifTrue:", "isDefault"],
referencedClasses: ["String"]
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "default",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@default"];
return $1;
},
args: [],
source: "default\x0a\x09^ default",
messageSends: [],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "default:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@default"]=aBoolean;
return self},
args: ["aBoolean"],
source: "default: aBoolean\x0a\x09default := aBoolean",
messageSends: [],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKButtonController(){return globals.MKButtonController||(typeof MKButtonController=="undefined"?nil:MKButtonController)}
return $MKButtonController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKButtonController",
messageSends: [],
referencedClasses: ["MKButtonController"]
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLabel",
protocol: 'defaults',
fn: function (){
var self=this;
return "OK";
},
args: [],
source: "defaultLabel\x0a\x09^ 'OK'",
messageSends: [],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=globals.MKButtonView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((80));
_st($2)._height_((24));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKButtonView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 80;\x0a\x09\x09height: 24;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "hasIcon",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._icon())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasIcon",{},globals.MKButtonView)})},
args: [],
source: "hasIcon\x0a\x09^ self icon notNil",
messageSends: ["notNil", "icon"],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@icon"];
return $1;
},
args: [],
source: "icon\x0a\x09^ icon",
messageSends: [],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "icon:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@icon"]=aString;
return self},
args: ["aString"],
source: "icon: aString\x0a\x09icon := aString",
messageSends: [],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "isDefault",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._default();
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isDefault",{},globals.MKButtonView)})},
args: [],
source: "isDefault\x0a\x09^ self default ifNil: [ false ]",
messageSends: ["ifNil:", "default"],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultLabel();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{},globals.MKButtonView)})},
args: [],
source: "label\x0a\x09^ label ifNil: [ self defaultLabel ]",
messageSends: ["ifNil:", "defaultLabel"],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._hasIcon();
if(smalltalk.assert($1)){
$2=_st(html)._img();
_st($2)._class_("mk_icon");
$3=_st($2)._src_(self._icon());
$3;
};
_st(html)._with_(self._label());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKButtonView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self hasIcon ifTrue: [\x0a\x09\x09html img \x0a\x09\x09\x09class: 'mk_icon';\x0a\x09\x09\x09src: self icon ].\x0a\x09html with: self label",
messageSends: ["ifTrue:", "hasIcon", "class:", "img", "src:", "icon", "with:", "label"],
referencedClasses: []
}),
globals.MKButtonView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
protocol: 'accessing',
fn: function (){
var self=this;
return "button";
},
args: [],
source: "tag\x0a\x09^ 'button'",
messageSends: [],
referencedClasses: []
}),
globals.MKButtonView);



smalltalk.addClass('MKCheckboxView', globals.MKSingleAspectView, ['id'], 'Moka-Views');
globals.MKCheckboxView.comment="I am a checkbox view. My default controller is `MKCheckboxController`.\x0a\x0aMy controller must answer to `#onToggled:`.\x0a\x0a##API\x0a\x0a- If no `aspect` is provided, the ckeckbox state will always be off.\x0a- use `#label:` to set the label string.";
smalltalk.addMethod(
smalltalk.method({
selector: "checked",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._aspectValue();
if(($receiver = $2) == nil || $receiver == null){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"checked",{},globals.MKCheckboxView)})},
args: [],
source: "checked\x0a\x09^ self aspectValue ifNil: [ false ]",
messageSends: ["ifNil:", "aspectValue"],
referencedClasses: []
}),
globals.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKCheckboxView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_checkbox");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKCheckboxView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_checkbox'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKCheckboxController(){return globals.MKCheckboxController||(typeof MKCheckboxController=="undefined"?nil:MKCheckboxController)}
return $MKCheckboxController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKCheckboxController",
messageSends: [],
referencedClasses: ["MKCheckboxController"]
}),
globals.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=globals.MKCheckboxView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((16));
_st($2)._height_((16));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKCheckboxView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 16;\x0a\x09\x09height: 16;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
globals.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@id"];
if(($receiver = $2) == nil || $receiver == null){
self["@id"]=_st((1000000)._atRandom())._asString();
$1=self["@id"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},globals.MKCheckboxView)})},
args: [],
source: "id\x0a\x09^ id ifNil: [ id := 1000000 atRandom asString ]",
messageSends: ["ifNil:", "asString", "atRandom"],
referencedClasses: []
}),
globals.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._checked();
if(smalltalk.assert($1)){
_st(_st(self["@root"])._asJQuery())._addClass_("checked");
};
_st(self["@root"])._at_put_("tabindex","0");
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKCheckboxView)})},
args: ["html"],
source: "renderContentOn: html\x09\x0a\x09self checked ifTrue: [ \x0a\x09\x09root asJQuery addClass: 'checked' ].\x0a\x09\x0a\x09root at: 'tabindex' put: '0'",
messageSends: ["ifTrue:", "checked", "addClass:", "asJQuery", "at:put:"],
referencedClasses: []
}),
globals.MKCheckboxView);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
protocol: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._checked();
if(smalltalk.assert($1)){
$2=_st(self["@root"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._addClass_("checked");
} else {
_st(_st(self["@root"])._asJQuery())._removeClass_("checked");
};
return self}, function($ctx1) {$ctx1.fill(self,"update",{},globals.MKCheckboxView)})},
args: [],
source: "update\x0a\x09self checked\x0a\x09\x09ifTrue: [ root asJQuery addClass: 'checked' ]\x0a\x09\x09ifFalse: [ root asJQuery removeClass: 'checked' ]",
messageSends: ["ifTrue:ifFalse:", "checked", "addClass:", "asJQuery", "removeClass:"],
referencedClasses: []
}),
globals.MKCheckboxView);



smalltalk.addClass('MKSwitchView', globals.MKCheckboxView, [], 'Moka-Views');
globals.MKSwitchView.comment="I am a switch view, similar to a `MKCheckboxView` but displayed as a switch. \x0aMy default controller is `MKCheckboxController`.";
smalltalk.addMethod(
smalltalk.method({
selector: "checkboxCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "mk_switch";
},
args: [],
source: "checkboxCssClass\x0a\x09^ 'mk_switch'",
messageSends: [],
referencedClasses: []
}),
globals.MKSwitchView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKSwitchView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_switch");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKSwitchView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_switch'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKSwitchView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=globals.MKSwitchView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((48));
_st($2)._height_((20));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKSwitchView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 48;\x0a\x09\x09height: 20;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
globals.MKSwitchView);



smalltalk.addClass('MKImageView', globals.MKLayoutView, ['imagePath', 'alternativeContents'], 'Moka-Views');
globals.MKImageView.comment="I display an image. \x0a\x0aNote that several views support adding icons using either `#icon:` or `#iconBlock:`.\x0a\x0a##API\x0a\x0aCreate instances using `MKImageView class>>imagePath:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "alternativeContents",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@alternativeContents"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._imagePath();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"alternativeContents",{},globals.MKImageView)})},
args: [],
source: "alternativeContents\x0a\x09^ alternativeContents ifNil: [ self imagePath ]",
messageSends: ["ifNil:", "imagePath"],
referencedClasses: []
}),
globals.MKImageView);

smalltalk.addMethod(
smalltalk.method({
selector: "alternativeContents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@alternativeContents"]=aString;
return self},
args: ["aString"],
source: "alternativeContents: aString\x0a\x09alternativeContents := aString",
messageSends: [],
referencedClasses: []
}),
globals.MKImageView);

smalltalk.addMethod(
smalltalk.method({
selector: "imagePath",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@imagePath"];
if(($receiver = $2) == nil || $receiver == null){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"imagePath",{},globals.MKImageView)})},
args: [],
source: "imagePath\x0a\x09^ imagePath ifNil: [ '' ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MKImageView);

smalltalk.addMethod(
smalltalk.method({
selector: "imagePath:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@imagePath"]=aString;
return self},
args: ["aString"],
source: "imagePath: aString\x0a\x09imagePath := aString",
messageSends: [],
referencedClasses: []
}),
globals.MKImageView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@root"];
_st($1)._src_(self._imagePath());
$2=_st($1)._alt_(self._alternativeContents());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKImageView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09root \x0a\x09\x09src: self imagePath;\x0a\x09\x09alt: self alternativeContents",
messageSends: ["src:", "imagePath", "alt:", "alternativeContents"],
referencedClasses: []
}),
globals.MKImageView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
protocol: 'accessing',
fn: function (){
var self=this;
return "img";
},
args: [],
source: "tag\x0a\x09^ 'img'",
messageSends: [],
referencedClasses: []
}),
globals.MKImageView);


smalltalk.addMethod(
smalltalk.method({
selector: "imagePath:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._imagePath_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"imagePath:",{aString:aString},globals.MKImageView.klass)})},
args: ["aString"],
source: "imagePath: aString\x0a\x09^ self new\x0a\x09\x09imagePath: aString;\x0a\x09\x09yourself",
messageSends: ["imagePath:", "new", "yourself"],
referencedClasses: []
}),
globals.MKImageView.klass);


smalltalk.addClass('MKLabelView', globals.MKSingleAspectView, [], 'Moka-Views');
globals.MKLabelView.comment="I am an label view. I display a `String`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKLabelView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_label");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKLabelView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_label'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKLabelView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=globals.MKLabelView.superclass.fn.prototype._defaultControllerClass.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultControllerClass",{},globals.MKLabelView)})},
args: [],
source: "defaultControllerClass\x0a\x09^ super defaultControllerClass",
messageSends: ["defaultControllerClass"],
referencedClasses: []
}),
globals.MKLabelView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKLabelLayout(){return globals.MKLabelLayout||(typeof MKLabelLayout=="undefined"?nil:MKLabelLayout)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MKLabelLayout())._new();
_st($2)._height_((24));
_st($2)._top_((0));
_st($2)._left_((0));
_st($2)._right_((0));
_st($2)._textAlign_("left");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKLabelView)})},
args: [],
source: "defaultLayout\x0a\x09^ MKLabelLayout new\x0a\x09\x09height: 24;\x0a\x09\x09top: 0;\x0a\x09\x09left:0;\x0a\x09\x09right: 0;\x0a\x09\x09textAlign: 'left';\x0a\x09\x09yourself",
messageSends: ["height:", "new", "top:", "left:", "right:", "textAlign:", "yourself"],
referencedClasses: ["MKLabelLayout"]
}),
globals.MKLabelView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._aspectValue());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKLabelView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self aspectValue",
messageSends: ["with:", "aspectValue"],
referencedClasses: []
}),
globals.MKLabelView);

smalltalk.addMethod(
smalltalk.method({
selector: "textAlign:",
protocol: 'layout',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._textAlign_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"textAlign:",{aString:aString},globals.MKLabelView)})},
args: ["aString"],
source: "textAlign: aString\x0a\x09self layout textAlign: aString",
messageSends: ["textAlign:", "layout"],
referencedClasses: []
}),
globals.MKLabelView);



smalltalk.addClass('MKHeadingView', globals.MKLabelView, ['level'], 'Moka-Views');
globals.MKHeadingView.comment="I display a heading, with a `level` from 1 to 6.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $String(){return globals.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st($String())._streamContents_((function(stream){
return smalltalk.withContext(function($ctx2) {
$2=_st(_st(stream).__lt_lt(globals.MKHeadingView.superclass.fn.prototype._cssClass.apply(_st(self), []))).__lt_lt(" mk_heading level");
$ctx2.sendIdx["<<"]=2;
return _st($2).__lt_lt(_st(self._level())._asString());
$ctx2.sendIdx["<<"]=1;
}, function($ctx2) {$ctx2.fillBlock({stream:stream},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKHeadingView)})},
args: [],
source: "cssClass\x0a\x09^ String streamContents: [ :stream |\x0a\x09\x09stream \x0a\x09\x09\x09<< super cssClass \x09\x0a\x09\x09\x09<< ' mk_heading level'\x0a\x09\x09\x09<< self level asString ]",
messageSends: ["streamContents:", "<<", "cssClass", "asString", "level"],
referencedClasses: ["String"]
}),
globals.MKHeadingView);

smalltalk.addMethod(
smalltalk.method({
selector: "level",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@level"];
if(($receiver = $2) == nil || $receiver == null){
$1=(1);
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"level",{},globals.MKHeadingView)})},
args: [],
source: "level\x0a\x09^ level ifNil: [ 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MKHeadingView);

smalltalk.addMethod(
smalltalk.method({
selector: "level:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@level"]=aNumber;
return self},
args: ["aNumber"],
source: "level: aNumber\x0a\x09level := aNumber",
messageSends: [],
referencedClasses: []
}),
globals.MKHeadingView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="h".__comma(_st(self._level())._asString());
return $1;
}, function($ctx1) {$ctx1.fill(self,"tag",{},globals.MKHeadingView)})},
args: [],
source: "tag\x0a\x09^ 'h', self level asString",
messageSends: [",", "asString", "level"],
referencedClasses: []
}),
globals.MKHeadingView);



smalltalk.addClass('MKOverlayView', globals.MKLayoutView, ['childView'], 'Moka-Views');
globals.MKOverlayView.comment="I display an transparent overlay, typically over other views, except my `childView`.\x0a\x0a## API\x0a\x0aCreate instances using the class-side `childView:` method.";
smalltalk.addMethod(
smalltalk.method({
selector: "childView",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@childView"];
return $1;
},
args: [],
source: "childView\x0a\x09^ childView",
messageSends: [],
referencedClasses: []
}),
globals.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "childView:",
protocol: 'accessing',
fn: function (aView){
var self=this;
self["@childView"]=aView;
return self},
args: ["aView"],
source: "childView: aView\x0a\x09childView := aView",
messageSends: [],
referencedClasses: []
}),
globals.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[self._childView()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},globals.MKOverlayView)})},
args: [],
source: "children\x0a\x09^ { self childView }",
messageSends: ["childView"],
referencedClasses: []
}),
globals.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKOverlayView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_overlay");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKOverlayView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_overlay'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKOverlayController(){return globals.MKOverlayController||(typeof MKOverlayController=="undefined"?nil:MKOverlayController)}
return $MKOverlayController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKOverlayController",
messageSends: [],
referencedClasses: ["MKOverlayController"]
}),
globals.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MKOverlayView.superclass.fn.prototype._remove.apply(_st(self), []);
$ctx1.sendIdx["remove"]=1;
_st(self._childView())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.MKOverlayView)})},
args: [],
source: "remove\x0a\x09super remove.\x0a\x09self childView remove",
messageSends: ["remove", "childView"],
referencedClasses: []
}),
globals.MKOverlayView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'defaults',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderContentOn: html\x0a\x09\x22Left empty on purpose. \x0a\x09No Content is rendered, as the childView is actually displayed separately\x22",
messageSends: [],
referencedClasses: []
}),
globals.MKOverlayView);


smalltalk.addMethod(
smalltalk.method({
selector: "childView:",
protocol: 'instance creation',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._childView_(aView);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"childView:",{aView:aView},globals.MKOverlayView.klass)})},
args: ["aView"],
source: "childView: aView\x0a\x09^ self new\x0a\x09\x09childView: aView;\x0a\x09\x09yourself",
messageSends: ["childView:", "new", "yourself"],
referencedClasses: []
}),
globals.MKOverlayView.klass);


smalltalk.addClass('MKPaneView', globals.MKLayoutView, ['views'], 'Moka-Views');
globals.MKPaneView.comment="I am a view containing other views.\x0a\x0a## API\x0a\x0aUse `#addView:` to add a view to the pane.";
smalltalk.addMethod(
smalltalk.method({
selector: "addView:",
protocol: 'adding',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._views())._add_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"addView:",{aView:aView},globals.MKPaneView)})},
args: ["aView"],
source: "addView: aView\x0a\x09self views add: aView",
messageSends: ["add:", "views"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderBottom:",
protocol: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderBottom_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderBottom:",{aNumber:aNumber},globals.MKPaneView)})},
args: ["aNumber"],
source: "borderBottom: aNumber\x0a\x09self layout borderBottom: aNumber",
messageSends: ["borderBottom:", "layout"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderLeft:",
protocol: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderLeft_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderLeft:",{aNumber:aNumber},globals.MKPaneView)})},
args: ["aNumber"],
source: "borderLeft: aNumber\x0a\x09self layout borderLeft: aNumber",
messageSends: ["borderLeft:", "layout"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderRight:",
protocol: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderRight_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderRight:",{aNumber:aNumber},globals.MKPaneView)})},
args: ["aNumber"],
source: "borderRight: aNumber\x0a\x09self layout borderRight: aNumber",
messageSends: ["borderRight:", "layout"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "borderTop:",
protocol: 'layout',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._layout())._borderTop_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"borderTop:",{aNumber:aNumber},globals.MKPaneView)})},
args: ["aNumber"],
source: "borderTop: aNumber\x0a\x09self layout borderTop: aNumber",
messageSends: ["borderTop:", "layout"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._views();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},globals.MKPaneView)})},
args: [],
source: "children\x0a\x09^ self views",
messageSends: ["views"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKPaneView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_pane");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKPaneView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_pane'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKPaneLayout(){return globals.MKPaneLayout||(typeof MKPaneLayout=="undefined"?nil:MKPaneLayout)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MKPaneLayout())._new();
_st($2)._left_((0));
_st($2)._top_((0));
_st($2)._right_((0));
_st($2)._bottom_((0));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKPaneView)})},
args: [],
source: "defaultLayout\x0a\x09^ MKPaneLayout new\x0a\x09\x09left: 0;\x0a\x09\x09top: 0;\x0a\x09\x09right: 0;\x0a\x09\x09bottom: 0;\x0a\x09\x09yourself",
messageSends: ["left:", "new", "top:", "right:", "bottom:", "yourself"],
referencedClasses: ["MKPaneLayout"]
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._views())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKPaneView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self views do: [ :each | \x0a\x09\x09html with: each ]",
messageSends: ["do:", "views", "with:"],
referencedClasses: []
}),
globals.MKPaneView);

smalltalk.addMethod(
smalltalk.method({
selector: "views",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@views"];
if(($receiver = $2) == nil || $receiver == null){
self["@views"]=_st($OrderedCollection())._new();
$1=self["@views"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"views",{},globals.MKPaneView)})},
args: [],
source: "views\x0a\x09^ views ifNil: [ views := OrderedCollection new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.MKPaneView);



smalltalk.addClass('MKPanelView', globals.MKPaneView, [], 'Moka-Views');
globals.MKPanelView.comment="I am similar to a `MKPaneView` but I am scrollable and display a light background.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKPanelView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_panel");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKPanelView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_panel'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKPanelView);



smalltalk.addClass('MKSelectionView', globals.MKAspectsView, ['selectionAspect', 'collectionAspect', 'displayBlock', 'iconBlock'], 'Moka-Views');
globals.MKSelectionView.comment="I an abstract selection view of a list of elements.\x0a\x0a## API\x0a\x0aRendering can be customized with `#displayBlock:` and `#iconBlock:`. Both take the item of the list as argument and answer a string.";
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueForAspect_(self._collectionAspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},globals.MKSelectionView)})},
args: [],
source: "collection\x0a\x09^ self valueForAspect: self collectionAspect",
messageSends: ["valueForAspect:", "collectionAspect"],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionAspect",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@collectionAspect"];
return $1;
},
args: [],
source: "collectionAspect\x0a\x09^ collectionAspect",
messageSends: [],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionAspect:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
self["@collectionAspect"]=aSelector;
return self},
args: ["aSelector"],
source: "collectionAspect: aSelector\x0a\x09collectionAspect := aSelector",
messageSends: [],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultDisplayBlock",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(function(item){
return smalltalk.withContext(function($ctx2) {
return _st(item)._asString();
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultDisplayBlock",{},globals.MKSelectionView)})},
args: [],
source: "defaultDisplayBlock\x0a\x09^ [ :item | item asString ]",
messageSends: ["asString"],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "displayBlock",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@displayBlock"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultDisplayBlock();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayBlock",{},globals.MKSelectionView)})},
args: [],
source: "displayBlock\x0a\x09^ displayBlock ifNil: [ self defaultDisplayBlock ]",
messageSends: ["ifNil:", "defaultDisplayBlock"],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "displayBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@displayBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "displayBlock: aBlock\x0a\x09displayBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "hasIcon",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._iconBlock())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasIcon",{},globals.MKSelectionView)})},
args: [],
source: "hasIcon\x0a\x09^ self iconBlock notNil",
messageSends: ["notNil", "iconBlock"],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "iconBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@iconBlock"];
return $1;
},
args: [],
source: "iconBlock\x0a\x09^ iconBlock",
messageSends: [],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "iconBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@iconBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "iconBlock: aBlock\x0a\x09iconBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIconFor:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._hasIcon();
if(smalltalk.assert($1)){
$2=_st(html)._img();
_st($2)._class_("mk_icon");
$3=_st($2)._src_(_st(self._iconBlock())._value_(anObject));
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderIconFor:on:",{anObject:anObject,html:html},globals.MKSelectionView)})},
args: ["anObject", "html"],
source: "renderIconFor: anObject on: html\x0a\x09self hasIcon ifTrue: [\x0a\x09\x09html img \x0a\x09\x09\x09class: 'mk_icon';\x0a\x09\x09\x09src: (self iconBlock value: anObject) ]",
messageSends: ["ifTrue:", "hasIcon", "class:", "img", "src:", "value:", "iconBlock"],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedItem",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._valueForAspect_(self._selectionAspect());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedItem",{},globals.MKSelectionView)})},
args: [],
source: "selectedItem\x0a\x09^ self valueForAspect: self selectionAspect",
messageSends: ["valueForAspect:", "selectionAspect"],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionAspect",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectionAspect"];
return $1;
},
args: [],
source: "selectionAspect\x0a\x09^ selectionAspect",
messageSends: [],
referencedClasses: []
}),
globals.MKSelectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionAspect:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
self["@selectionAspect"]=aSelector;
return self},
args: ["aSelector"],
source: "selectionAspect: aSelector\x0a\x09selectionAspect := aSelector",
messageSends: [],
referencedClasses: []
}),
globals.MKSelectionView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:collectionAspect:selectionAspect:",
protocol: 'instance creation',
fn: function (aModel,collectionSelector,selectionSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._model_(aModel);
_st($2)._collectionAspect_(collectionSelector);
_st($2)._selectionAspect_(selectionSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model:collectionAspect:selectionAspect:",{aModel:aModel,collectionSelector:collectionSelector,selectionSelector:selectionSelector},globals.MKSelectionView.klass)})},
args: ["aModel", "collectionSelector", "selectionSelector"],
source: "model: aModel collectionAspect: collectionSelector selectionAspect: selectionSelector\x0a\x09^ (self model: aModel)\x0a\x09\x09collectionAspect: collectionSelector;\x0a\x09\x09selectionAspect: selectionSelector;\x0a\x09\x09yourself",
messageSends: ["collectionAspect:", "model:", "selectionAspect:", "yourself"],
referencedClasses: []
}),
globals.MKSelectionView.klass);


smalltalk.addClass('MKDropdownView', globals.MKSelectionView, ['modalPaneView', 'listView'], 'Moka-Views');
globals.MKDropdownView.comment="I am a push button view. My default controller is `MKButtonController`.\x0a\x0aMy controller must answer to `#onPressed`.\x0a\x0a## API\x0a\x0a- Instances can be set a `default` button\x0a- Use `#label:` to set the label string";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKDropdownView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_dropdown");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKDropdownView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_dropdown'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKDropdownController(){return globals.MKDropdownController||(typeof MKDropdownController=="undefined"?nil:MKDropdownController)}
return $MKDropdownController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKDropdownController",
messageSends: [],
referencedClasses: ["MKDropdownController"]
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=globals.MKDropdownView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((120));
_st($2)._height_((24));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKDropdownView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 120;\x0a\x09\x09height: 24;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "listView",
protocol: 'views',
fn: function (){
var self=this;
function $MKDropdownListView(){return globals.MKDropdownListView||(typeof MKDropdownListView=="undefined"?nil:MKDropdownListView)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@listView"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($MKDropdownListView())._model_collectionAspect_selectionAspect_(self._model(),self._collectionAspect(),self._selectionAspect());
_st($3)._width_(self._width());
_st($3)._height_("auto");
_st($3)._displayBlock_(self._displayBlock());
_st($3)._iconBlock_(self._iconBlock());
$4=_st($3)._yourself();
self["@listView"]=$4;
$1=self["@listView"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"listView",{},globals.MKDropdownView)})},
args: [],
source: "listView\x0a\x09^ listView ifNil: [\x0a\x09\x09listView := (MKDropdownListView \x09\x0a\x09\x09\x09model: self model\x0a\x09\x09\x09collectionAspect: self collectionAspect\x0a\x09\x09\x09selectionAspect: self selectionAspect)\x0a\x09\x09\x09\x09width: self width;\x0a\x09\x09\x09\x09height: 'auto';\x0a\x09\x09\x09\x09displayBlock: self displayBlock;\x0a\x09\x09\x09\x09iconBlock: self iconBlock;\x0a\x09\x09\x09\x09yourself ]",
messageSends: ["ifNil:", "width:", "model:collectionAspect:selectionAspect:", "model", "collectionAspect", "selectionAspect", "width", "height:", "displayBlock:", "displayBlock", "iconBlock:", "iconBlock", "yourself"],
referencedClasses: ["MKDropdownListView"]
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "modalPaneView",
protocol: 'views',
fn: function (){
var self=this;
function $MKModalDecorator(){return globals.MKModalDecorator||(typeof MKModalDecorator=="undefined"?nil:MKModalDecorator)}
function $MKViewRemoved(){return globals.MKViewRemoved||(typeof MKViewRemoved=="undefined"?nil:MKViewRemoved)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$1;
$2=self["@modalPaneView"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st($MKModalDecorator())._decorate_(self._listView());
_st($3)._extraCssClass_("mk_dropdown_pane");
_st($3)._closeOnEnter_(true);
_st($3)._closeOnClick_(true);
$4=_st($3)._yourself();
self["@modalPaneView"]=$4;
self["@modalPaneView"];
_st(self["@modalPaneView"])._on_send_to_($MKViewRemoved(),"focus",self);
$1=self["@modalPaneView"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"modalPaneView",{},globals.MKDropdownView)})},
args: [],
source: "modalPaneView\x0a\x09^ modalPaneView ifNil: [\x0a\x09\x09modalPaneView := (MKModalDecorator decorate: self listView)\x0a\x09\x09\x09extraCssClass: 'mk_dropdown_pane';\x0a\x09\x09\x09closeOnEnter: true;\x0a\x09\x09\x09closeOnClick: true;\x0a\x09\x09\x09yourself.\x0a\x09\x09modalPaneView \x0a\x09\x09\x09on: MKViewRemoved\x0a\x09\x09\x09send: #focus\x0a\x09\x09\x09to: self.\x0a\x09\x09modalPaneView ]",
messageSends: ["ifNil:", "extraCssClass:", "decorate:", "listView", "closeOnEnter:", "closeOnClick:", "yourself", "on:send:to:"],
referencedClasses: ["MKModalDecorator", "MKViewRemoved"]
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "popupList",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=self._modalPaneView();
$2=$1;
$4=self._domPosition();
$ctx1.sendIdx["domPosition"]=1;
$3=_st($4)._x();
_st($2)._left_($3);
_st($1)._top_(_st(self._domPosition())._y());
$5=_st($1)._render();
_st(self._listView())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"popupList",{},globals.MKDropdownView)})},
args: [],
source: "popupList\x0a\x09\x22Show a new list view inside a modal pane\x22\x0a\x09self modalPaneView \x0a\x09\x09left: self domPosition x;\x0a\x09\x09top: self domPosition y;\x0a\x09\x09render.\x0a\x09self listView focus",
messageSends: ["left:", "modalPaneView", "x", "domPosition", "top:", "y", "render", "focus", "listView"],
referencedClasses: []
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(html)._div())._class_("mk_dropdown_arrows");
$1=self._selectedItem();
$ctx1.sendIdx["selectedItem"]=1;
self._renderIconFor_on_($1,html);
_st(html)._with_(_st(self._displayBlock())._value_(self._selectedItem()));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKDropdownView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div class: 'mk_dropdown_arrows'.\x0a\x09self renderIconFor: self selectedItem on: html.\x0a\x09html with: (self displayBlock value: self selectedItem)",
messageSends: ["class:", "div", "renderIconFor:on:", "selectedItem", "with:", "value:", "displayBlock"],
referencedClasses: []
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedListItem",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@root"])._asJQuery())._find_(":selected"))._text();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedListItem",{},globals.MKDropdownView)})},
args: [],
source: "selectedListItem\x0a\x09^ (root asJQuery find: ':selected') text",
messageSends: ["text", "find:", "asJQuery"],
referencedClasses: []
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
protocol: 'accessing',
fn: function (){
var self=this;
return "button";
},
args: [],
source: "tag\x0a\x09^ 'button'",
messageSends: [],
referencedClasses: []
}),
globals.MKDropdownView);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
protocol: 'accessing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st([self._selectionAspect(),self._collectionAspect()])._includes_(_st(anAnnouncement)._aspect());
if(smalltalk.assert($1)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},globals.MKDropdownView)})},
args: ["anAnnouncement"],
source: "update: anAnnouncement\x0a\x09({self selectionAspect. self collectionAspect} \x0a\x09\x09includes: anAnnouncement aspect) ifTrue: [\x0a\x09\x09\x09self update ]",
messageSends: ["ifTrue:", "includes:", "selectionAspect", "collectionAspect", "aspect", "update"],
referencedClasses: []
}),
globals.MKDropdownView);



smalltalk.addClass('MKListView', globals.MKSelectionView, [], 'Moka-Views');
globals.MKListView.comment="I display a list of elements in a list control field.";
smalltalk.addMethod(
smalltalk.method({
selector: "activateItem:",
protocol: 'actions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateListItem_(self._findListItemFor_(anObject));
return self}, function($ctx1) {$ctx1.fill(self,"activateItem:",{anObject:anObject},globals.MKListView)})},
args: ["anObject"],
source: "activateItem: anObject\x0a\x09self activateListItem: (self findListItemFor: anObject)",
messageSends: ["activateListItem:", "findListItemFor:"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "activateListItem:",
protocol: 'actions',
fn: function (aListItem){
var self=this;
var item;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aListItem)._get_((0));
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
$2=_st(_st(aListItem)._parent())._children();
$3=self._selectedCssClass();
$ctx1.sendIdx["selectedCssClass"]=1;
_st($2)._removeClass_($3);
_st(aListItem)._addClass_(self._selectedCssClass());
self._ensureVisible_(aListItem);
return self}, function($ctx1) {$ctx1.fill(self,"activateListItem:",{aListItem:aListItem,item:item},globals.MKListView)})},
args: ["aListItem"],
source: "activateListItem: aListItem\x0a\x09| item |\x0a\x09\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09aListItem parent children removeClass: self selectedCssClass.\x0a\x09aListItem addClass: self selectedCssClass.\x0a    \x0a\x09self ensureVisible: aListItem",
messageSends: ["ifNil:", "get:", "removeClass:", "children", "parent", "selectedCssClass", "addClass:", "ensureVisible:"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "activeItem",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._findItemFor_(_st(_st(self["@root"])._asJQuery())._find_(".".__comma(self._selectedCssClass())));
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeItem",{},globals.MKListView)})},
args: [],
source: "activeItem\x0a\x09^ self findItemFor: (root asJQuery find: '.', self selectedCssClass)",
messageSends: ["findItemFor:", "find:", "asJQuery", ",", "selectedCssClass"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKListView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_list");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKListView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_list'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKListController(){return globals.MKListController||(typeof MKListController=="undefined"?nil:MKListController)}
return $MKListController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKListController",
messageSends: [],
referencedClasses: ["MKListController"]
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureVisible:",
protocol: 'private',
fn: function (aListItem){
var self=this;
var parent,position;
function $MKViewScroll(){return globals.MKViewScroll||(typeof MKViewScroll=="undefined"?nil:MKViewScroll)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$9,$8,$11,$10,$7,$6,$15,$14,$16,$13,$17,$12,$18,$22,$23,$21,$20,$19;
$1=_st(aListItem)._get_((0));
$ctx1.sendIdx["get:"]=1;
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
position=self._positionOf_(aListItem);
parent=_st(aListItem)._parent();
$4=_st(aListItem)._position();
$ctx1.sendIdx["position"]=1;
$3=_st($4)._top();
$ctx1.sendIdx["top"]=1;
$2=_st($3).__lt((0));
if(smalltalk.assert($2)){
$5=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=2;
$9=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=3;
$8=_st($9)._scrollTop();
$ctx1.sendIdx["scrollTop"]=1;
$11=_st(aListItem)._position();
$ctx1.sendIdx["position"]=2;
$10=_st($11)._top();
$ctx1.sendIdx["top"]=2;
$7=_st($8).__plus($10);
$ctx1.sendIdx["+"]=1;
$6=_st($7).__minus((10));
$ctx1.sendIdx["-"]=1;
_st($5)._scrollTop_($6);
$ctx1.sendIdx["scrollTop:"]=1;
};
$15=_st(aListItem)._position();
$ctx1.sendIdx["position"]=3;
$14=_st($15)._top();
$ctx1.sendIdx["top"]=3;
$16=_st(aListItem)._height();
$ctx1.sendIdx["height"]=1;
$13=_st($14).__plus($16);
$ctx1.sendIdx["+"]=2;
$17=_st(parent)._height();
$ctx1.sendIdx["height"]=2;
$12=_st($13).__gt($17);
if(smalltalk.assert($12)){
$18=_st(parent)._get_((0));
$ctx1.sendIdx["get:"]=4;
$22=_st(_st(parent)._get_((0)))._scrollTop();
$23=_st(aListItem)._height();
$ctx1.sendIdx["height"]=3;
$21=_st($22).__plus($23);
$20=_st($21).__minus(_st(_st(parent)._height()).__minus(_st(_st(aListItem)._position())._top()));
$ctx1.sendIdx["-"]=2;
$19=_st($20).__plus((10));
$ctx1.sendIdx["+"]=3;
_st($18)._scrollTop_($19);
};
self._announce_(_st($MKViewScroll())._view_(self));
return self}, function($ctx1) {$ctx1.fill(self,"ensureVisible:",{aListItem:aListItem,parent:parent,position:position},globals.MKListView)})},
args: ["aListItem"],
source: "ensureVisible: aListItem\x09\x0a\x09\x22Move the scrollbar to show the active element\x22\x0a\x09\x0a\x09| parent position |\x0a\x09(aListItem get: 0) ifNil: [ ^ self ].\x0a\x09position := self positionOf: aListItem.\x0a\x09parent := aListItem parent.\x0a\x09\x0a    aListItem position top < 0 ifTrue: [\x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem position top - 10) ].\x0a    aListItem position top + aListItem height > parent height ifTrue: [ \x0a\x09\x09(parent get: 0) scrollTop: ((parent get: 0) scrollTop + aListItem height - (parent height - aListItem position top)) +10 ].\x0a\x09\x0a\x09self announce: (MKViewScroll view: self)",
messageSends: ["ifNil:", "get:", "positionOf:", "parent", "ifTrue:", "<", "top", "position", "scrollTop:", "-", "+", "scrollTop", ">", "height", "announce:", "view:"],
referencedClasses: ["MKViewScroll"]
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "findItemFor:",
protocol: 'accessing',
fn: function (aListItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aListItem)._asJQuery())._data())._at_("item");
return $1;
}, function($ctx1) {$ctx1.fill(self,"findItemFor:",{aListItem:aListItem},globals.MKListView)})},
args: ["aListItem"],
source: "findItemFor: aListItem\x0a\x09^ aListItem asJQuery data at: 'item'",
messageSends: ["at:", "data", "asJQuery"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "findListItemFor:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(self["@root"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3=_st($4)._find_("li");
$2=_st($3)._filter_(_st((function(thisArg){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(thisArg)._asJQuery())._data_("item")).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({thisArg:thisArg},$ctx1,1)})}))._currySelf());
$1=_st($2)._eq_((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"findListItemFor:",{anObject:anObject},globals.MKListView)})},
args: ["anObject"],
source: "findListItemFor: anObject\x0a\x09^ (((root asJQuery find: 'li') \x0a\x09\x09filter: [ :thisArg | (thisArg asJQuery data: 'item') = anObject ] currySelf) eq: 0)",
messageSends: ["eq:", "filter:", "find:", "asJQuery", "currySelf", "=", "data:"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOf:",
protocol: 'private',
fn: function (aListItem){
var self=this;
return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1;
return self},
args: ["aListItem"],
source: "positionOf: aListItem\x0a\x09\x22TODO: rewrite in smalltalk\x22\x0a\x09<return aListItem.parent().children().get().indexOf(aListItem.get(0)) + 1>",
messageSends: [],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._collection())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._renderItem_on_(each,html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self["@root"])._at_put_("tabindex","0");
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKListView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self collection do: [ :each  | \x0a    \x09self renderItem: each  on: html ].\x0a\x09\x0a\x09\x22make the list focusable\x22\x0a\x09root at: 'tabindex' put: '0'",
messageSends: ["do:", "collection", "renderItem:on:", "at:put:"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderItem:on:",
protocol: 'rendering',
fn: function (anObject,html){
var self=this;
var li;
return smalltalk.withContext(function($ctx1) { 
var $1;
li=_st(html)._li();
_st(_st(li)._asJQuery())._data_put_("item",anObject);
$1=_st(self._selectedItem()).__eq(anObject);
if(smalltalk.assert($1)){
_st(li)._class_(self._selectedCssClass());
};
_st(li)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderIconFor_on_(anObject,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
_st(li)._with_(_st(self._displayBlock())._value_(anObject));
return self}, function($ctx1) {$ctx1.fill(self,"renderItem:on:",{anObject:anObject,html:html,li:li},globals.MKListView)})},
args: ["anObject", "html"],
source: "renderItem: anObject on: html\x0a\x09| li |\x0a\x09\x0a\x09li := html li.\x0a\x09li asJQuery data: 'item' put: anObject.\x0a\x09\x0a\x09self selectedItem = anObject ifTrue: [\x0a\x09\x09li class: self selectedCssClass ].\x0a\x09li with: [ self renderIconFor: anObject on: html ].\x0a\x09li with: (self displayBlock value: anObject)",
messageSends: ["li", "data:put:", "asJQuery", "ifTrue:", "=", "selectedItem", "class:", "selectedCssClass", "with:", "renderIconFor:on:", "value:", "displayBlock"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "selected";
},
args: [],
source: "selectedCssClass\x0a\x09^ 'selected'",
messageSends: [],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
protocol: 'accessing',
fn: function (){
var self=this;
return "ul";
},
args: [],
source: "tag\x0a\x09^ 'ul'",
messageSends: [],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "update:",
protocol: 'updating',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=_st(anAnnouncement)._aspect();
$ctx1.sendIdx["aspect"]=1;
$1=_st($2).__eq(self._selectionAspect());
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
self._updateSelectedItem();
};
$3=_st(_st(anAnnouncement)._aspect()).__eq(self._collectionAspect());
if(smalltalk.assert($3)){
self._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"update:",{anAnnouncement:anAnnouncement},globals.MKListView)})},
args: ["anAnnouncement"],
source: "update: anAnnouncement\x0a\x09anAnnouncement aspect = self selectionAspect ifTrue: [\x0a\x09\x09self updateSelectedItem ].\x0a\x09\x09\x0a\x09anAnnouncement aspect = self collectionAspect ifTrue: [\x0a\x09\x09self update ]",
messageSends: ["ifTrue:", "=", "aspect", "selectionAspect", "updateSelectedItem", "collectionAspect", "update"],
referencedClasses: []
}),
globals.MKListView);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSelectedItem",
protocol: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._activateItem_(self._selectedItem());
return self}, function($ctx1) {$ctx1.fill(self,"updateSelectedItem",{},globals.MKListView)})},
args: [],
source: "updateSelectedItem\x0a\x09self activateItem: self selectedItem",
messageSends: ["activateItem:", "selectedItem"],
referencedClasses: []
}),
globals.MKListView);


smalltalk.addMethod(
smalltalk.method({
selector: "model:collectionAspect:selectionAspect:",
protocol: 'instance creation',
fn: function (aModel,collectionSelector,selectionSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._model_(aModel);
_st($2)._collectionAspect_(collectionSelector);
_st($2)._selectionAspect_(selectionSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"model:collectionAspect:selectionAspect:",{aModel:aModel,collectionSelector:collectionSelector,selectionSelector:selectionSelector},globals.MKListView.klass)})},
args: ["aModel", "collectionSelector", "selectionSelector"],
source: "model: aModel collectionAspect: collectionSelector selectionAspect: selectionSelector\x0a\x09^ (self model: aModel)\x0a\x09\x09collectionAspect: collectionSelector;\x0a\x09\x09selectionAspect: selectionSelector;\x0a\x09\x09yourself",
messageSends: ["collectionAspect:", "model:", "selectionAspect:", "yourself"],
referencedClasses: []
}),
globals.MKListView.klass);


smalltalk.addClass('MKDropdownListView', globals.MKListView, [], 'Moka-Views');
globals.MKDropdownListView.comment="I am similar to a `MKListView`, but inside a `MKDropdownView`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKDropdownListView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_dropdown_list");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKDropdownListView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_dropdown_list'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKDropdownListView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $MKDropdownListController(){return globals.MKDropdownListController||(typeof MKDropdownListController=="undefined"?nil:MKDropdownListController)}
return $MKDropdownListController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKDropdownListController",
messageSends: [],
referencedClasses: ["MKDropdownListController"]
}),
globals.MKDropdownListView);



smalltalk.addClass('MKSourceListView', globals.MKListView, [], 'Moka-Views');
globals.MKSourceListView.comment="I am similar to a `MKListView`, but displayed slightly differently, in a similar way as in the left-side the of Finder in OSX.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKSourceListView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_sourcelist");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKSourceListView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_sourcelist'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKSourceListView);



smalltalk.addClass('MKSplitView', globals.MKLayoutView, ['firstView', 'secondView', 'splitter', 'thickness', 'minimumThickness'], 'Moka-Views');
globals.MKSplitView.comment="I am the superclass of all split views. I arrange two child view with a splitter between them.\x0a\x0a## API\x0a\x0aCreate instances using the class-side method `firstView:secondView:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "children",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[self._firstView(),self._secondView()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},globals.MKSplitView)})},
args: [],
source: "children\x0a\x09^ { self firstView. self secondView }",
messageSends: ["firstView", "secondView"],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKSplitView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_split_view");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKSplitView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_split_view'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultMinimumThickness",
protocol: 'defaults',
fn: function (){
var self=this;
return (50);
},
args: [],
source: "defaultMinimumThickness\x0a\x09^ 50",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultThickness",
protocol: 'defaults',
fn: function (){
var self=this;
return (300);
},
args: [],
source: "defaultThickness\x0a\x09^ 300",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "firstView",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@firstView"];
return $1;
},
args: [],
source: "firstView\x0a\x09^ firstView",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "firstView:",
protocol: 'accessing',
fn: function (aView){
var self=this;
function $MKDecorator(){return globals.MKDecorator||(typeof MKDecorator=="undefined"?nil:MKDecorator)}
return smalltalk.withContext(function($ctx1) { 
self["@firstView"]=_st($MKDecorator())._decorate_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"firstView:",{aView:aView},globals.MKSplitView)})},
args: ["aView"],
source: "firstView: aView\x0a\x09firstView := MKDecorator decorate: aView",
messageSends: ["decorate:"],
referencedClasses: ["MKDecorator"]
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "minimumThickness",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@minimumThickness"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultMinimumThickness();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"minimumThickness",{},globals.MKSplitView)})},
args: [],
source: "minimumThickness\x0a\x09^ minimumThickness ifNil: [ self defaultMinimumThickness ]",
messageSends: ["ifNil:", "defaultMinimumThickness"],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "minimumThickness:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@minimumThickness"]=aNumber;
return self},
args: ["aNumber"],
source: "minimumThickness: aNumber\x0a\x09minimumThickness := aNumber",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(self._firstView());
$ctx1.sendIdx["with:"]=1;
self["@splitter"]=_st(_st(html)._div())._class_(self._splitterCssClass());
_st(html)._with_(self._secondView());
_st(self._controller())._placeSplitter_(self._thickness());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKSplitView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09html with: self firstView.\x0a\x09splitter := html div class: self splitterCssClass.\x0a\x09html with: self secondView.\x0a\x09\x0a\x09self controller placeSplitter: self thickness",
messageSends: ["with:", "firstView", "class:", "div", "splitterCssClass", "secondView", "placeSplitter:", "controller", "thickness"],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@secondView"];
return $1;
},
args: [],
source: "secondView\x0a\x09^ secondView",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView:",
protocol: 'accessing',
fn: function (aView){
var self=this;
function $MKDecorator(){return globals.MKDecorator||(typeof MKDecorator=="undefined"?nil:MKDecorator)}
return smalltalk.withContext(function($ctx1) { 
self["@secondView"]=_st($MKDecorator())._decorate_(aView);
return self}, function($ctx1) {$ctx1.fill(self,"secondView:",{aView:aView},globals.MKSplitView)})},
args: ["aView"],
source: "secondView: aView\x0a\x09secondView := MKDecorator decorate: aView",
messageSends: ["decorate:"],
referencedClasses: ["MKDecorator"]
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "splitter",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@splitter"];
return $1;
},
args: [],
source: "splitter\x0a\x09\x22Answer the `splitter` TagBrush\x22\x0a\x09\x0a\x09^ splitter",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "splitterCssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "mk_splitter";
},
args: [],
source: "splitterCssClass\x0a\x09^ 'mk_splitter'",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "thickness",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@thickness"];
if(($receiver = $2) == nil || $receiver == null){
$1=self._defaultThickness();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"thickness",{},globals.MKSplitView)})},
args: [],
source: "thickness\x0a\x09^ thickness ifNil: [ self defaultThickness ]",
messageSends: ["ifNil:", "defaultThickness"],
referencedClasses: []
}),
globals.MKSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "thickness:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@thickness"]=aNumber;
return self},
args: ["aNumber"],
source: "thickness: aNumber\x0a\x09thickness := aNumber",
messageSends: [],
referencedClasses: []
}),
globals.MKSplitView);


smalltalk.addMethod(
smalltalk.method({
selector: "firstView:secondView:",
protocol: 'instance creation',
fn: function (aView,anotherView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._firstView_(aView);
_st($2)._secondView_(anotherView);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstView:secondView:",{aView:aView,anotherView:anotherView},globals.MKSplitView.klass)})},
args: ["aView", "anotherView"],
source: "firstView: aView secondView: anotherView\x0a\x09^ self new\x0a\x09\x09firstView: aView;\x0a\x09\x09secondView: anotherView;\x0a\x09\x09yourself",
messageSends: ["firstView:", "new", "secondView:", "yourself"],
referencedClasses: []
}),
globals.MKSplitView.klass);


smalltalk.addClass('MKHorizontalSplitView', globals.MKSplitView, [], 'Moka-Views');
globals.MKHorizontalSplitView.comment="I split my child views vertically.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKHorizontalSplitView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" horizontal");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKHorizontalSplitView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' horizontal'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKLeftFixedHorizontalSplitController(){return globals.MKLeftFixedHorizontalSplitController||(typeof MKLeftFixedHorizontalSplitController=="undefined"?nil:MKLeftFixedHorizontalSplitController)}
return $MKLeftFixedHorizontalSplitController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKLeftFixedHorizontalSplitController",
messageSends: [],
referencedClasses: ["MKLeftFixedHorizontalSplitController"]
}),
globals.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "leftThickness:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
function $MKLeftFixedHorizontalSplitController(){return globals.MKLeftFixedHorizontalSplitController||(typeof MKLeftFixedHorizontalSplitController=="undefined"?nil:MKLeftFixedHorizontalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKLeftFixedHorizontalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"leftThickness:",{aNumber:aNumber},globals.MKHorizontalSplitView)})},
args: ["aNumber"],
source: "leftThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKLeftFixedHorizontalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKLeftFixedHorizontalSplitController"]
}),
globals.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "rightThickness:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
function $MKRightFixedHorizontalSplitController(){return globals.MKRightFixedHorizontalSplitController||(typeof MKRightFixedHorizontalSplitController=="undefined"?nil:MKRightFixedHorizontalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKRightFixedHorizontalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"rightThickness:",{aNumber:aNumber},globals.MKHorizontalSplitView)})},
args: ["aNumber"],
source: "rightThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKRightFixedHorizontalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKRightFixedHorizontalSplitController"]
}),
globals.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView:",
protocol: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
globals.MKHorizontalSplitView.superclass.fn.prototype._secondView_.apply(_st(self), [aView]);
$1=self._secondView();
_st($1)._right_((0));
$2=_st($1)._left_("auto");
return self}, function($ctx1) {$ctx1.fill(self,"secondView:",{aView:aView},globals.MKHorizontalSplitView)})},
args: ["aView"],
source: "secondView: aView\x0a\x09super secondView: aView.\x0a\x09self secondView \x0a\x09\x09right: 0;\x0a\x09\x09left: 'auto'",
messageSends: ["secondView:", "right:", "secondView", "left:"],
referencedClasses: []
}),
globals.MKHorizontalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEventHandlers",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(self["@splitter"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3="axis".__minus_gt("x");
$ctx1.sendIdx["->"]=1;
$4="containment".__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent());
$ctx1.sendIdx["->"]=2;
$5="helper".__minus_gt("clone");
$ctx1.sendIdx["->"]=3;
$6="cursor".__minus_gt("ew-resize");
$ctx1.sendIdx["->"]=4;
$7="stop".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return self._resized();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["->"]=5;
$2=globals.HashedCollection._from_([$3,$4,$5,$6,$7,"drag".__minus_gt((function(event,ui){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onResize_helper_(event,ui);
}, function($ctx2) {$ctx2.fillBlock({event:event,ui:ui},$ctx1,2)})}))]);
_st($1)._draggable_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setupEventHandlers",{},globals.MKHorizontalSplitView)})},
args: [],
source: "setupEventHandlers\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'x'. \x0a        'containment' -> splitter asJQuery parent.\x0a\x09\x09'helper' -> 'clone'.\x0a\x09\x09'cursor' -> 'ew-resize'.\x0a\x09\x09'stop' -> [ self resized ].\x0a        'drag' -> [ :event :ui | self controller onResize: event helper: ui ] }",
messageSends: ["draggable:", "asJQuery", "->", "parent", "resized", "onResize:helper:", "controller"],
referencedClasses: []
}),
globals.MKHorizontalSplitView);



smalltalk.addClass('MKVerticalSplitView', globals.MKSplitView, [], 'Moka-Views');
globals.MKVerticalSplitView.comment="I split my child views horizontally.";
smalltalk.addMethod(
smalltalk.method({
selector: "bottomThickness:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
function $MKBottomFixedVerticalSplitController(){return globals.MKBottomFixedVerticalSplitController||(typeof MKBottomFixedVerticalSplitController=="undefined"?nil:MKBottomFixedVerticalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKBottomFixedVerticalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"bottomThickness:",{aNumber:aNumber},globals.MKVerticalSplitView)})},
args: ["aNumber"],
source: "bottomThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKBottomFixedVerticalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKBottomFixedVerticalSplitController"]
}),
globals.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKVerticalSplitView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" vertical");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKVerticalSplitView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' vertical'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKTopFixedVerticalSplitController(){return globals.MKTopFixedVerticalSplitController||(typeof MKTopFixedVerticalSplitController=="undefined"?nil:MKTopFixedVerticalSplitController)}
return $MKTopFixedVerticalSplitController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKTopFixedVerticalSplitController",
messageSends: [],
referencedClasses: ["MKTopFixedVerticalSplitController"]
}),
globals.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "secondView:",
protocol: 'accessing',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
globals.MKVerticalSplitView.superclass.fn.prototype._secondView_.apply(_st(self), [aView]);
$1=self._secondView();
_st($1)._bottom_((0));
$2=_st($1)._top_("auto");
return self}, function($ctx1) {$ctx1.fill(self,"secondView:",{aView:aView},globals.MKVerticalSplitView)})},
args: ["aView"],
source: "secondView: aView\x0a\x09super secondView: aView.\x0a\x09self secondView \x0a\x09\x09bottom: 0;\x0a\x09\x09top: 'auto'",
messageSends: ["secondView:", "bottom:", "secondView", "top:"],
referencedClasses: []
}),
globals.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEventHandlers",
protocol: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(self["@splitter"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3="axis".__minus_gt("y");
$ctx1.sendIdx["->"]=1;
$4="containment".__minus_gt(_st(_st(self["@splitter"])._asJQuery())._parent());
$ctx1.sendIdx["->"]=2;
$5="cursor".__minus_gt("ns-resize");
$ctx1.sendIdx["->"]=3;
$6="helper".__minus_gt("clone");
$ctx1.sendIdx["->"]=4;
$7="stop".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return self._resized();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["->"]=5;
$2=globals.HashedCollection._from_([$3,$4,$5,$6,$7,"drag".__minus_gt((function(event,ui){
return smalltalk.withContext(function($ctx2) {
return _st(self._controller())._onResize_helper_(event,ui);
}, function($ctx2) {$ctx2.fillBlock({event:event,ui:ui},$ctx1,2)})}))]);
_st($1)._draggable_($2);
return self}, function($ctx1) {$ctx1.fill(self,"setupEventHandlers",{},globals.MKVerticalSplitView)})},
args: [],
source: "setupEventHandlers\x0a\x09splitter asJQuery draggable: #{ \x0a    \x09'axis' -> 'y'. \x0a        'containment' -> splitter asJQuery parent.\x0a\x09\x09'cursor' -> 'ns-resize'.\x0a\x09\x09'helper' -> 'clone'.\x0a\x09\x09'stop' -> [ self resized ].\x0a        'drag' -> [ :event :ui | self controller onResize: event helper: ui ] }",
messageSends: ["draggable:", "asJQuery", "->", "parent", "resized", "onResize:helper:", "controller"],
referencedClasses: []
}),
globals.MKVerticalSplitView);

smalltalk.addMethod(
smalltalk.method({
selector: "topThickness:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
function $MKTopFixedVerticalSplitController(){return globals.MKTopFixedVerticalSplitController||(typeof MKTopFixedVerticalSplitController=="undefined"?nil:MKTopFixedVerticalSplitController)}
return smalltalk.withContext(function($ctx1) { 
self._thickness_(aNumber);
self._controller_(_st($MKTopFixedVerticalSplitController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"topThickness:",{aNumber:aNumber},globals.MKVerticalSplitView)})},
args: ["aNumber"],
source: "topThickness: aNumber\x0a\x09self thickness: aNumber.\x0a\x09self controller: MKTopFixedVerticalSplitController new",
messageSends: ["thickness:", "controller:", "new"],
referencedClasses: ["MKTopFixedVerticalSplitController"]
}),
globals.MKVerticalSplitView);



smalltalk.addClass('MKTextAreaView', globals.MKSingleAspectView, [], 'Moka-Views');
globals.MKTextAreaView.comment="I am an text area view. My default controller is `MKAnyKeyInputController`.\x0a\x0aMy controller must answer to `#onKeyPressed:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(globals.MKTextAreaView.superclass.fn.prototype._cssClass.apply(_st(self), [])).__comma(" mk_textarea");
return $1;
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},globals.MKTextAreaView)})},
args: [],
source: "cssClass\x0a\x09^ super cssClass, ' mk_textarea'",
messageSends: [",", "cssClass"],
referencedClasses: []
}),
globals.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKAnyKeyInputController(){return globals.MKAnyKeyInputController||(typeof MKAnyKeyInputController=="undefined"?nil:MKAnyKeyInputController)}
return $MKAnyKeyInputController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKAnyKeyInputController",
messageSends: [],
referencedClasses: ["MKAnyKeyInputController"]
}),
globals.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=globals.MKTextAreaView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((160));
_st($2)._height_((80));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKTextAreaView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 160;\x0a\x09\x09height: 80;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
globals.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@root"])._with_(self._aspectValue());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKTextAreaView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09root with: self aspectValue",
messageSends: ["with:", "aspectValue"],
referencedClasses: []
}),
globals.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
protocol: 'accessing',
fn: function (){
var self=this;
return "textarea";
},
args: [],
source: "tag\x0a\x09^ 'textarea'",
messageSends: [],
referencedClasses: []
}),
globals.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
protocol: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(_st(self["@root"])._asJQuery())._val_(self._aspectValue());
};
return self}, function($ctx1) {$ctx1.fill(self,"update",{},globals.MKTextAreaView)})},
args: [],
source: "update\x0a\x09root ifNotNil: [ root asJQuery val: self aspectValue ]",
messageSends: ["ifNotNil:", "val:", "asJQuery", "aspectValue"],
referencedClasses: []
}),
globals.MKTextAreaView);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@root"])._asJQuery())._val();
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.MKTextAreaView)})},
args: [],
source: "value\x0a\x09^ root asJQuery val",
messageSends: ["val", "asJQuery"],
referencedClasses: []
}),
globals.MKTextAreaView);



smalltalk.addClass('MKInputView', globals.MKTextAreaView, [], 'Moka-Views');
globals.MKInputView.comment="I am an input view. My default controller is `MKEnterInputController`.\x0a\x0aMy controller must answer to `#onKeyPressed:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "moka_view mk_input";
},
args: [],
source: "cssClass\x0a\x09^ 'moka_view mk_input'",
messageSends: [],
referencedClasses: []
}),
globals.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultControllerClass",
protocol: 'defaults',
fn: function (){
var self=this;
function $MKEnterInputController(){return globals.MKEnterInputController||(typeof MKEnterInputController=="undefined"?nil:MKEnterInputController)}
return $MKEnterInputController();
},
args: [],
source: "defaultControllerClass\x0a\x09^ MKEnterInputController",
messageSends: [],
referencedClasses: ["MKEnterInputController"]
}),
globals.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLayout",
protocol: 'defaults',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=globals.MKInputView.superclass.fn.prototype._defaultLayout.apply(_st(self), []);
_st($2)._width_((160));
_st($2)._height_((24));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLayout",{},globals.MKInputView)})},
args: [],
source: "defaultLayout\x0a\x09^ super defaultLayout\x0a\x09\x09width: 160;\x0a\x09\x09height: 24;\x0a\x09\x09yourself",
messageSends: ["width:", "defaultLayout", "height:", "yourself"],
referencedClasses: []
}),
globals.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@root"])._value_(self._aspectValue());
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.MKInputView)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09root value: self aspectValue",
messageSends: ["value:", "aspectValue"],
referencedClasses: []
}),
globals.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "tag",
protocol: 'accessing',
fn: function (){
var self=this;
return "input";
},
args: [],
source: "tag\x0a\x09^ 'input'",
messageSends: [],
referencedClasses: []
}),
globals.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "triggerChangeOnAnyKey",
protocol: 'settings',
fn: function (){
var self=this;
function $MKAnyKeyInputController(){return globals.MKAnyKeyInputController||(typeof MKAnyKeyInputController=="undefined"?nil:MKAnyKeyInputController)}
return smalltalk.withContext(function($ctx1) { 
self._controller_(_st($MKAnyKeyInputController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"triggerChangeOnAnyKey",{},globals.MKInputView)})},
args: [],
source: "triggerChangeOnAnyKey\x0a\x09self controller: MKAnyKeyInputController new",
messageSends: ["controller:", "new"],
referencedClasses: ["MKAnyKeyInputController"]
}),
globals.MKInputView);

smalltalk.addMethod(
smalltalk.method({
selector: "triggerChangeOnEnter",
protocol: 'settings',
fn: function (){
var self=this;
function $MKEnterInputController(){return globals.MKEnterInputController||(typeof MKEnterInputController=="undefined"?nil:MKEnterInputController)}
return smalltalk.withContext(function($ctx1) { 
self._controller_(_st($MKEnterInputController())._new());
return self}, function($ctx1) {$ctx1.fill(self,"triggerChangeOnEnter",{},globals.MKInputView)})},
args: [],
source: "triggerChangeOnEnter\x0a\x09self controller: MKEnterInputController new",
messageSends: ["controller:", "new"],
referencedClasses: ["MKEnterInputController"]
}),
globals.MKInputView);


});
