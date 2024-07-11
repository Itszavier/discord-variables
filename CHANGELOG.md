<!-- @format -->

<<<<<<< HEAD


=======
>>>>>>> db7708a82494c3d6c05b05d3df9fbdff9927102f
### Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

#### [released]

### [v3.0.0] - 2024-07-10

#### Added

- Introduced the `Transformer` class to replace the `Converter` class for improved scalability.
- Added a powerful single parsing method in the `Transformer` class.
- Added the `ruleStore` class also for creating rules offer types to some extent
- Added the `createRule` helper function to offer typescript types 

#### Removed

- Removed the `Converter` class.
- Removed the `Rules` class

#### Improved

- Enhanced string parsing by using regex, ensuring identifier matching no matter the complexity within the `string`.

### [v2.0.0] - 2023-12-15

#### Added

- Initial release of the `Converter` class with event parsers defined as methods.

### [v1.0.0] - 2023-06-01

#### Added

- Basic functionality for handling events with simple parsing methods.
