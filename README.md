<p align="center">
  <h3 align="center">Simple Form Generator</h3>
  <p align="center">
    Simple yet fun
  </p>
</p>

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

## Getting Started

To run this project all you need is `yarn` to install all dependencies and execute `start` script.

### Installation

```sh
yarn
```

### Local development

```sh
yarn start
```

## Usage

To populate form with dynamic data you have to pass proper JSON structure with all required fields. An example used in this project is located in `src/sampleForm.json`, which is tested by default before starting local server or building whole project. If you want to change name of this file, remember to update it's test `src/formStructure.test.js`.

<div align="center">
	<img src="https://raw.githubusercontent.com/testing-library/react-testing-library/master/other/goat.png"  	alt="React Testing Library" />
	<p><a href="https://github.com/testing-library/react-testing-library">React Testing Library</a></p>
</div>

Right now structure builder covers:

- [x] Input (text, email)
- [x] Select
- [ ] Radio button
- [ ] Checkbox
- [ ] ...

Validation:

- [x] Required
- [x] minLength
- [x] Type `email`
- [ ] ...

<!-- ROADMAP -->

## Roadmap

Many to come, forms ideas are limitless.

<!-- CONTRIBUTING -->

## Contributing

Contributions are welcome. Any ideas and issues you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Profit 🚀
