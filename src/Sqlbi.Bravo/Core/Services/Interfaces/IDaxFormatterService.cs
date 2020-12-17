﻿using Microsoft.AnalysisServices.Tabular;
using Sqlbi.Bravo.Core.Client.Http;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sqlbi.Bravo.Core.Services.Interfaces
{
    internal interface IDaxFormatterService
    {
        Task InitilizeOrRefreshAsync();

        Task FormatAsync(DaxFormatterTabularObjectType objectType);

        int Count(DaxFormatterTabularObjectType objectType);

        List<Measure> GetMeasures();
    }
}