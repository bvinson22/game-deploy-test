const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Behaviors.Fade,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Mouse: 0},
	{Keyboard: 0},
	{"8Direction": 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{WizardPlayer: 0},
	{Bullet: 0},
	{Goblin: 0},
	{DestroyOutsideLayout: 0},
	{Spell: 0},
	{Fade: 0},
	{SparkFlash: 0},
	{Boss: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Mouse: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	WizardPlayer: class extends self.ISpriteInstance {},
	Goblin: class extends self.ISpriteInstance {},
	Spell: class extends self.ISpriteInstance {},
	SparkFlash: class extends self.ISpriteInstance {},
	Boss: class extends self.ISpriteInstance {}
}