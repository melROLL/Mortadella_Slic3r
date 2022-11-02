**A SuperSlicer fork (which is a PrusaSlicer fork (which is a slic3r fork)** (previously Slic3r++))

<p align="center">
  <img src="media/Mortadella_Slic3r.PNG">
</p>

Prebuilt Windows, Linux and macOS 64-bit releases are available through the [git releases page](https://github.com/supermerill/SuperSlicer/releases). The Windows & macOS builds aren't tested, just compiled, so please report any bugs that may occur during use.  
For **installers**, check the badges above. Windows users can use chocolatey or scoop.  

Mortadella_Slic3r takes 3D models (STL, OBJ, AMF) and converts them into G-code
instructions for FFF printers or PNG layers for mSLA 3D printers. It's compatible with any modern printer based on the RepRap toolchain which is running a firmware based on Marlin, Prusa, Klipper, etc.

Mortadella_Slic3r is based on [SuperSlicer](https://github.com/supermerill/SuperSlicer) by Supermerill  
SuperSlicer is based on [PrusaSlicer](https://github.com/prusa3d/PrusaSlicer) by Prusa Research.
PrusaSlicer is based on [Slic3r](https://github.com/Slic3r/Slic3r) by Alessandro Ranellucci and the RepRap community.

See the [documentation directory](doc/) for information about compilation.


### What are Mortadella_Slic3r / SuperSlicer / PrusaSlicer / Slic3r's main features?

Key features are:

* **Multi-platform** (Linux/Mac/Win) and packaged as standalone-app with no dependencies required
* Complete **command-line interface** to use it without GUI
* Multi-material **(multiple extruders)** object printing
* Multiple G-code flavors supported (RepRap, Makerbot, Mach3, Machinekit, etc.)
* Ability to plate **multiple objects having distinct print settings**
* **Multithread** processing
* **STL auto-repair** (tolerance for broken models)
* Wide automated unit testing

Other major features are:

* Combine infill every 'n' perimeters layer & varying density to speed up printing
* **3D preview** (including multi-material files)
* **Multiple layer heights** in a single print
* **Spiral vase** mode for bumpless vases
* Fine adjustment of speed, acceleration, and extrusion width
* Several infill patterns including honeycomb, spirals, Hilbert curves, gyroid
* Support material, raft, brim, skirt
* **Standby temperature** and automatic wiping for multi-extruder printing
* [Customizable **G-code macros**](https://github.com/prusa3d/PrusaSlicer/wiki/Slic3r-Prusa-Edition-Macro-Language) and output filename with variable placeholders
* Support for **post-processing scripts**
* **Cooling logic** controlling fan speed and dynamic print speed

[Command-Line Interface](https://github.com/prusa3d/PrusaSlicer/wiki/Command-Line-Interface) wiki page.

## Development

### What language is it written in?

Almost everything is written in C++, C and HTML.

### How to compile

If you are on linux or running a VM you can also use Prosciutto_Slic3r, it is a script I made that can compile easilly for you Mortadella_Slic3r or SuperSlicer : https://github.com/melROLL/Prosciutto_Slic3r

If you want to compile the source yourself, follow the instructions on one of
these documentation pages (those instruction are for SuperSlicer if you want to make it for Mortadella_Slic3r, change the github link to this one : https://github.com/melROLL/Mortadella_Slic3r.git ):
* [Linux](doc/How%20to%20build%20-%20Linux%20et%20al.md)
* [macOS](doc/How%20to%20build%20-%20Mac%20OS.md)
* [Windows](doc/How%20to%20build%20-%20Windows.md)

You can also look at the workflow YAML-files for [git actions](https://github.com/supermerill/Slic3r/tree/master/.github/workflows), as they describe how to build SuperSlicer from source from a "virgin" dev computer.
