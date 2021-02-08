﻿using Sqlbi.Bravo.Core.Services;
using Sqlbi.Bravo.UI.Framework.ViewModels;

namespace Sqlbi.Bravo.UI.ViewModels
{
    internal class MeasureInfoViewModel : BaseViewModel
    {
        public string Name { get; set; }

        public string OriginalDax { get; set; }

        public string FormatterDax { get; set; }

        public bool Reformat { get; set; } = true;

        public IDaxFormatterServiceTabularObject TabularObject { get; set; }

        public bool IsAlreadyFormatted => OriginalDax.Trim() == FormatterDax.Trim();
    }
}
