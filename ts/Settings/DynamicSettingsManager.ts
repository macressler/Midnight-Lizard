/// <reference path="../DI/-DI.ts" />
/// <reference path="../Colors/-Colors.ts" />
/// <reference path="../Settings/-Settings.ts" />


namespace MidnightLizard.Settings
{
    export abstract class IDynamicSettingsManager extends IBaseSettingsManager
    {
        abstract changeSettings(newSettings: Settings.ColorScheme): void;
    }

    @DI.injectable(IDynamicSettingsManager)
    class DynamicSettingsManager extends MidnightLizard.Settings.BaseSettingsManager implements IDynamicSettingsManager
    {
        constructor(rootDocument: Document)
        {
            super(rootDocument, null as any, null as any, null as any);
        }

        public initDefaultColorSchemes() { }

        protected initCurrentSettings() { }

        changeSettings(newSettings: ColorScheme): void
        {
            Object.assign(this._currentSettings, newSettings);
            this.initCurSet();
            this._onSettingsChanged.raise(x => { }, this._shift);
        }
    }
}