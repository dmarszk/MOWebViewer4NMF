/**
	This file should contain only deployment specific configuration.
*/

/**
	The array below contains the list of loaded XML files.
	It should be configured appropriately in each MO Viewer instance.
	The files shall be listed in dependency order (i.e. MAL spec comes first).
*/
var configServiceDefFiles = [
	"https://raw.githubusercontent.com/esa/nanosat-mo-framework/dev/core/mo-services-xml/src/main/resources/xml/ServiceDefMAL.xml",
	"https://raw.githubusercontent.com/esa/nanosat-mo-framework/dev/core/mo-services-xml/src/main/resources/xml/ServiceDefCOM-nmf.xml",
	"xml/ServiceDefCommon.xml",
	"xml/ServiceDefMC.xml",
	"https://raw.githubusercontent.com/esa/nanosat-mo-framework/dev/core/mo-services-xml/src/main/resources/xml/ServiceDefPLATFORM.xml",
	"https://raw.githubusercontent.com/esa/nanosat-mo-framework/dev/core/mo-services-xml/src/main/resources/xml/ServiceDefSM.xml",
];

var configServiceBookFiles = {
	"MAL": {pdfFilePath:		"pdf/ServiceDefMAL.xml-521x0b2e1.pdf",		name:"521x0b2e1", icon:"book"},
	"COM": {pdfFilePath:		"pdf/ServiceDefCOM.xml-521x1b1.pdf", 			name:"521x1b1", 	icon:"book"},
	"Common": {pdfFilePath:	"pdf/ServiceDefCommon.xml-522x0r1.pdf",		name:"522x0r1 (draft)", 	icon:"book_red"},
	"MC": {pdfFilePath:			"pdf/ServiceDefMC.xml-522x1b1.pdf", 			name:"522x1b1",		icon:"book"},
}
