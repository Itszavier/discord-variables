<!-- @format -->

### Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

#### [released]

### [v3.0.0] - 2024-07-10

#### Added

- Introduced the `Transformer` class to replace the `Converter` class for improved scalability.
- Added a powerful single parsing method in the `Transformer` class.

#### Removed

- Removed the `Converter` class.

#### Improved

- Enhanced string parsing by using regex, ensuring identifier matching no matter the complexity within the `string`.

### [v2.0.0] - 2023-12-15

#### Added

- Initial release of the `Converter` class with event parsers defined as methods.

### [v1.0.0] - 2023-06-01

#### Added

- Basic functionality for handling events with simple parsing methods.

