(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{421:function(e,t,a){"use strict";a.r(t);var n=a(15),l=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installing-zowe-cli-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing Zowe CLI plug-ins")]),e._v(" "),a("p",[e._v("Use commands in the "),a("code",[e._v("plugins")]),e._v(" command group to install and manage Zowe™ CLI plug-ins.")]),e._v(" "),a("p",[a("strong",[e._v("Important!")]),e._v(" Plug-ins can gain control of your CLI application legitimately during the execution of commands. Install third-party plug-ins at your own risk. We make no warranties regarding the use of third-party plug-ins.")]),e._v(" "),a("p",[e._v("You can install the following Zowe plug-ins:")]),e._v(" "),a("ul",[a("li",[e._v("IBM® CICS® Plug-in for Zowe CLI")]),e._v(" "),a("li",[e._v("IBM® Db2® Plug-in for Zowe CLI")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.openmainframeproject.org/projects/zowe/conformance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Third-party Zowe Conformant Plug-ins"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Use either of the following methods to install plug-ins:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install from an online NPM registry. Use this method when your computer "),a("em",[a("strong",[e._v("can")])]),e._v(" access the Internet.")]),e._v(" "),a("p",[e._v("For more information, see "),a("a",{attrs:{href:"#installing-plug-ins-from-an-online-registry"}},[e._v("Installing plug-ins from an online registry")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Install from a local package. With this method, you download and install the plug-ins from a bundled set of "),a("code",[e._v(".tgz")]),e._v(" files. Use this method when your computer "),a("em",[a("strong",[e._v("cannot")])]),e._v(" access the Internet.")]),e._v(" "),a("p",[e._v("For more information, see "),a("a",{attrs:{href:"#installing-plug-ins-from-a-local-package"}},[e._v("Installing plug-ins from a local package")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"installing-plug-ins-from-an-online-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-from-an-online-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing plug-ins from an online registry")]),e._v(" "),a("p",[e._v("Install Zowe CLI plug-ins using npm commands on Windows, Mac, and Linux. The procedures in this article assume that you previously installed the core CLI.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Meet the "),a("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("software requirements for each plug-in")]),e._v(" that you install.")],1)]),e._v(" "),a("li",[a("p",[e._v("Set the proper target registry by issuing the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Issue the following command to install a plug-in:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins install <my-plugin>\n")])])]),a("p",[a("strong",[e._v("Note:")]),e._v(" Replace "),a("code",[e._v("<my-plugin>")]),e._v(" with the installation command syntax in the following table:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Plug-in")]),e._v(" "),a("th",[e._v("Installation Command Syntax")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("IBM CICS Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("@brightside/cics@lts-incremental")])])]),e._v(" "),a("tr",[a("td",[e._v("IBM Db2 Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("@brightside/db2@lts-incremental")])])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td")])])])]),e._v(" "),a("li",[a("p",[e._v("(Optional) Issue the following command to install two or more plug-ins using one command. Separate the "),a("code",[e._v("<my-plugin>")]),e._v(" names with one space.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins install <@brightside/my-plugin1> <@brightside/my-plugin2> <@brightside/my-plugin3> ...\n")])])]),a("p",[a("strong",[e._v("Note:")]),e._v(" The IBM Db2 Plug-in for Zowe CLI requires additional licensing and ODBC driver configurations. If you installed the DB2 plug-in, see "),a("router-link",{attrs:{to:"/user-guide/cli-db2plugin.html"}},[e._v("IBM Db2 Plug-in for Zowe CLI")]),e._v(".")],1)])]),e._v(" "),a("p",[e._v("You installed Zowe CLI plug-ins.")]),e._v(" "),a("h2",{attrs:{id:"installing-plug-ins-from-a-local-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-plug-ins-from-a-local-package","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing plug-ins from a local package")]),e._v(" "),a("p",[e._v("Install plug-ins from a local package on any computer that has limited or no access to the Internet. The procedure assumes that you previously installed the core CLI.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Meet the "),a("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("software requirements for each plug-in")]),e._v(" that you want to install.")],1)]),e._v(" "),a("li",[a("p",[e._v("Obtain the installation files.")]),e._v(" "),a("p",[e._v("From the Zowe "),a("a",{attrs:{href:"https://zowe.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),a("OutboundLink")],1),e._v(" website, click "),a("strong",[e._v("Download Zowe CLI")]),e._v(" to download the Zowe CLI installation package named "),a("code",[e._v("zowe-cli-package-*v*.*r*.*m*.zip")]),e._v(" to your computer.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" "),a("code",[e._v("v")]),e._v(" indicates the version, "),a("code",[e._v("r")]),e._v(" indicates the release number, and "),a("code",[e._v("m")]),e._v(" indicates the modification number")])]),e._v(" "),a("li",[a("p",[e._v("Open a command-line window such as Windows Command Prompt. Browse to the directory where you downloaded the Zowe CLI installation package. Issue the following command to unzip the files:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("unzip zowe-cli-package-v.r.m.zip\n")])])]),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("unzip zowe-cli-package-1.0.1.zip\n")])])]),a("p",[e._v("By default, the unzip command extracts the contents of the zip file to the directory where you downloaded the file. Optionally, extract the contents of the .zip file to your preferred location.")])]),e._v(" "),a("li",[a("p",[e._v("Open a command-line window and change to the local directory where you extracted the zip file.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd C:\\Users\\userID\\my_downloads\\<file_name>.zip\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Issue the following command to install the plug-in:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins install <my-plugin>\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("<my-plugin>")]),e._v(" with the .tgz file name listed in the following table:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Plug-in")]),e._v(" "),a("th",[a("code",[e._v(".tgz")]),e._v(" File Name")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("IBM CICS Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("cics.tgz")])])]),e._v(" "),a("tr",[a("td",[e._v("IBM Db2 Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("db2.tgz")])])])])])])]),e._v(" "),a("p",[e._v("You installed Zowe CLI plug-ins.")]),e._v(" "),a("h2",{attrs:{id:"validating-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Validating plug-ins")]),e._v(" "),a("p",[e._v("Issue the plug-in validation command to run tests against all plug-ins (or against a plug-in that you specify) to verify that the plug-ins integrate properly with Zowe CLI. The tests confirm that the plug-in does not conflict with existing command groups in the base application. The command response provides you with details or error messages about how the plug-ins integrate with Zowe CLI.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("validate")]),e._v(" command has the following syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins validate [plugin]\n")])])]),a("ul",[a("li",[a("p",[a("strong",[a("code",[e._v("[plugin]")])]),a("br"),e._v("\n(Optional) Specifies the name of the plug-in that you want to\nvalidate. If you do not specify a plug-in name, the command\nvalidates all installed plug-ins. The name of the plug-in is not always the same as the name of the NPM package.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Plug-in")]),e._v(" "),a("th",[e._v("Syntax")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("IBM CICS Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("@brightside/cics")])])]),e._v(" "),a("tr",[a("td",[e._v("IBM Db2 Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("@brightside/db2")])])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td")])])])])]),e._v(" "),a("p",[a("strong",[e._v("Examples: Validate plug-ins")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The following example illustrates the syntax to use to validate the IBM CICS Plug-in for Zowe CLI:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins validate @brightside/cics\n")])])])]),e._v(" "),a("li",[a("p",[e._v("The following example illustrates the syntax to use to validate all installed plug-ins:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins validate\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"updating-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating plug-ins")]),e._v(" "),a("p",[e._v("You can update Zowe CLI plug-ins from an online registry or from a local package.")]),e._v(" "),a("h3",{attrs:{id:"update-plug-ins-from-an-online-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-plug-ins-from-an-online-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Update plug-ins from an online registry")]),e._v(" "),a("p",[e._v("Issue the "),a("code",[e._v("update")]),e._v(" command to install the latest stable version or a specific version of a plug-in that you installed previously. The "),a("code",[e._v("update")]),e._v(" command has the following syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins update [plugin...] [--registry <registry>]\n")])])]),a("ul",[a("li",[a("p",[e._v("[plugin...]")]),e._v(" "),a("p",[e._v("Specifies the name of an installed plug-in that you want to update. The name of the plug-in is not always the same as the name of the NPM package. You can use npm semantic versioning to specify a plug-in version to which to update. For more information, see npm semver.")])]),e._v(" "),a("li",[a("p",[e._v("[--registry <registry>]")]),e._v(" "),a("p",[e._v("(Optional) Specifies a registry URL that is different from the registry URL of the original installation.")])])]),e._v(" "),a("p",[a("strong",[e._v("Examples: Update plug-ins")])]),e._v(" "),a("p",[e._v("The following example illustrates the syntax to use to update an installed plug-in to the latest version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins update @brightside/my-plugin@lts-incremental\n")])])]),a("p",[e._v("The following example illustrates the syntax to use to update a plug-in to a specific version:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('zowe plugins update @brightside/my-plugin@"^1.2.3"\n')])])]),a("h3",{attrs:{id:"update-plug-ins-from-a-local-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-plug-ins-from-a-local-package","aria-hidden":"true"}},[e._v("#")]),e._v(" Update plug-ins from a local package")]),e._v(" "),a("p",[e._v("You can update plug-ins from a local package. You acquire the media from the "),a("a",{attrs:{href:"https://zowe.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Download"),a("OutboundLink")],1),e._v(" website and update the plug-ins using the "),a("code",[e._v("zowe plugins install")]),e._v(" command.")]),e._v(" "),a("p",[e._v("To update plug-ins from a local package, follow the steps described in "),a("a",{attrs:{href:"#installing-plug-ins-from-a-local-package"}},[e._v("Installing plug-ins from a local package")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"uninstall-plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-plug-ins","aria-hidden":"true"}},[e._v("#")]),e._v(" Uninstall Plug-ins")]),e._v(" "),a("p",[e._v("Issue the "),a("code",[e._v("uninstall")]),e._v(" command to uninstall plug-ins from Zowe CLI. After the uninstall process completes successfully, the product no longer contains the plug-in configuration.")]),e._v(" "),a("p",[e._v("The uninstall command contains the following syntax:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins uninstall [plugin]\n")])])]),a("ul",[a("li",[a("p",[a("code",[e._v("[plugin]")])]),e._v(" "),a("p",[e._v("Specifies the name of the plug-in that you want to uninstall.")])])]),e._v(" "),a("p",[e._v("The following table describes the uninstallation command synstax for each plug-in:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Plug-in")]),e._v(" "),a("th",[e._v("Uninstallation Command Syntax")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("IBM CICS Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("@brightside/cics")])])]),e._v(" "),a("tr",[a("td",[e._v("IBM Db2 Plug-in for Zowe CLI")]),e._v(" "),a("td",[a("code",[e._v("@brightside/db2")])])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td")])])]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("p",[e._v("The following example illustrates the command to uninstall the CICS plug-in:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe plugins uninstall @brightside/cics\n")])])])])},[],!1,null,null,null);t.default=l.exports}}]);