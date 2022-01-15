﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sqlbi.Bravo.Infrastructure;
using Sqlbi.Bravo.Infrastructure.Helpers;
using Sqlbi.Bravo.Models;
using Sqlbi.Bravo.Services;
using System.Net.Mime;
using System.Threading;
using System.Threading.Tasks;

namespace Sqlbi.Bravo.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class ExportDataController : ControllerBase
    {
        private readonly IExportDataService _exportDataService;
        private readonly IPBICloudService _pbicloudService;

        public ExportDataController(IExportDataService exportDataService, IPBICloudService pbicloudService)
        {
            _exportDataService = exportDataService;
            _pbicloudService = pbicloudService;
        }

        /// <summary>
        /// Exports tables from a <see cref="PBIDesktopReport"/> using the provided <see cref="ExportDelimitedTextSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        /// <response code="400">Status400BadRequest - See the "instance" and "detail" properties to identify the specific occurrence of the problem</response>
        [HttpPost]
        [ActionName("ExportDelimitedTextFileFromReport")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ExportResult))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesDefaultResponseType]
        public IActionResult ExportDelimitedTextFileFromPBIDesktopReport(ExportDelimitedTextFromPBIReportRequest request, CancellationToken cancellationToken)
        {
            var dialogResult = WindowDialogHelper.BrowseFolderDialog(cancellationToken);
            if (dialogResult.Canceled == false)
            {
                request.Settings!.ExportPath = dialogResult.Path!;
                try
                { 
                    _exportDataService.ExportDelimitedTextFile(request.Report!, request.Settings!, HttpContext.RequestAborted);
                }
                catch (BravoException ex)
                {
                    return Problem(ex.ProblemDetail, ex.ProblemInstance, StatusCodes.Status400BadRequest);
                }
            }

            return Ok(dialogResult);
        }

        /// <summary>
        /// Exports tables from a <see cref="PBICloudDataset"/> using the provided <see cref="ExportDelimitedTextSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        /// <response code="400">Status400BadRequest - See the "instance" and "detail" properties to identify the specific occurrence of the problem</response>
        /// <response code="401">Status401Unauthorized - Sign-in required</response>
        [HttpPost]
        [ActionName("ExportDelimitedTextFileFromDataset")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ExportResult))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> ExportDelimitedTextFileFromPBICloudDataset(ExportDelimitedTextFromPBICloudDatasetRequest request, CancellationToken cancellationToken)
        {
            if (await _pbicloudService.IsSignInRequiredAsync())
                return Unauthorized();

            var dialogResult = WindowDialogHelper.BrowseFolderDialog(cancellationToken);
            if (dialogResult.Canceled == false)
            {
                request.Settings!.ExportPath = dialogResult.Path!;
                try
                {
                    _exportDataService.ExportDelimitedTextFile(request.Dataset!, request.Settings!, HttpContext.RequestAborted);
                }
                catch (BravoException ex)
                {
                    return Problem(ex.ProblemDetail, ex.ProblemInstance, StatusCodes.Status400BadRequest);
                }
            }

            return Ok(dialogResult);
        }

        /// <summary>
        /// Exports tables from a <see cref="PBIDesktopReport"/> using the provided <see cref="ExportExcelSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        /// <response code="400">Status400BadRequest - See the "instance" and "detail" properties to identify the specific occurrence of the problem</response>
        [HttpPost]
        [ActionName("ExportExcelFileFromReport")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesDefaultResponseType]
        public IActionResult ExportExcelFileFromPBIDesktopReport(CancellationToken cancellationToken)
        {
            return Ok();
        }

        /// <summary>
        /// Exports tables from a <see cref="PBICloudDataset"/> using the provided <see cref="ExportExcelSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        /// <response code="400">Status400BadRequest - See the "instance" and "detail" properties to identify the specific occurrence of the problem</response>
        /// <response code="401">Status401Unauthorized - Sign-in required</response>
        [HttpPost]
        [ActionName("ExporExcelFileFromDataset")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> ExportExcelFileFromPBICloudDataset(CancellationToken cancellationToken)
        {
            if (await _pbicloudService.IsSignInRequiredAsync())
                return Unauthorized();

            return Ok();
        }
    }
}
