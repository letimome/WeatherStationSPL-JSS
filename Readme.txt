About this project
==================

This project shows how to use pure::variants to build a product line of HTML 
based weather station programs.

The example contains two transformations.

The "FileProcessing" transformation creates the actual product variant from 
the input assets. To run the generated application for a variant open the file
<ProjectPath>/output/<VariantName>/index.html in a external web browser 
or by doubleclicking the file in the Variants Projects view in pure::variants.

The "SelectionReport" transformation uses a JavaScript script to generate a 
CVS file which shows the selection status for every feature. The script used 
for this transformation is located in the "script" folder.

In addition the "report" folder contains a BIRT report, which show the variant 
matrix of all variants in the configuration space. To run this report the 
"pure::variants Connector for Reporting with BIRT" is required.

In addition the feature model shows how to use different languages for the 
visible name of features. The languages can be changed by the preferences 
"Variant  Management -> Visualization -> Default Language". The model uses 
English as default language and provides translations for German and Chinese.


Initial configuration
=====================

No further configuration is required.


Transformation results
======================

The transformation result will be stored in <ProjectPath>/output/<VariantName>.
