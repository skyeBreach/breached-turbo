<!-- markdownlint-disable-file MD041 -->
<div align="center">
    <h1>
        <br>
        BreachedTurbo
		<br>
		<img
			alt="License Badge"
			src="https://flat.badgen.net/github/license/skyeBreach/breached-turbo"
		/>
		<img
			alt="GitHub Stars Badge"
			src="https://flat.badgen.net/github/stars/skyeBreach/breached-turbo"
		/>
    </h1>
</div>

BreachedTurbo is a monorepo boilerplate tooled using <a href='https://turbo.build/'>Turborepo</a> and
<a href='https://bun.sh/'>Bun</a>, that prioritizes the developer's time and experience first.

> [!CAUTION]
>
> It is currently **NOT** recommended to use this boilerplate for any production level projects.
>
> Some of the features referred to within this README and the documentation provided are in an early stage or are not
> currently present.
>
> If you choose to ignore this **WARNING**, then you do so at your own **RISK**!

## 📝 Table of Contents <!-- omit in toc -->

- [What is BreachedTurbo?](#what-is-breachedturbo)
- [Features](#features)
- [Boilerplate Directory Structure](#boilerplate-directory-structure)
- [Installation](#installation)
    - [\[Optional\] Step 0: Fork the Repository](#optional-step-0-fork-the-repository)
    - [Step 1: Clone the Repository](#step-1-clone-the-repository)
    - [Step 2: Navigate to Local Repository](#step-2-navigate-to-local-repository)
    - [Step 3: Install Dependencies](#step-3-install-dependencies)
    - [Step 4: Building](#step-4-building)
- [License](#license)

## What is BreachedTurbo?

> [!IMPORTANT]
> Whilst this repository is free to use, we do ask that the user's of the repo properly attribute it so others can
> easily find and use it!

BreachedTurbo is a monorepo boilerplate/starter tooled using <a href='https://turbo.build/'>Turborepo</a> and
<a href='https://bun.sh/'>Bun</a>. It is designed to increase the speed at which developers can spin up new TurboRepo
projects whilst still being easy to configure and customize. This boilerplate intends to provide a solid foundation for
the developer without adding too much unnecessary code or dependencies that are difficult and time consuming to remove.

Where boilerplate code has been included, we have taken the time to make sure its easily configurable, organized well,
and properly documented; most of the boilerplate code can either be easily ripped out or interacted with via scripts
that can be called through the commandline. As BreachedTurbo utilizes the Bun runtime any scripts that are utilized, run
much quicker than if they were to be ran on another JS runtime.

Whilst we try to keep this boilerplate easily configurable, we do still want it to be feature rich for those who the
`batteries-included` experience. To achieve this we have included a multiple config, tooling, and utility packages with
example apps.

## Features

- Powered by TurboRepo
- TypeScript for Type Safety and Checking

## Boilerplate Directory Structure

```bash
.
├── scripts                 # Stores all shared script files and utility scripts that are needed by the monorepo
│
├── tooling                 # Holds all repository tools and tooling packages for the monorepo
│
├── package.json	        # Project dependencies and scripts
├── turbo.json              # Turbo configuration file
├── LICENSE.txt             # License file
└── README.md               # Readme file
```

## Installation

To install this boilerplate follow these steps:

### [Optional] Step 0: Fork the Repository

Whilst it is not required to fork the repository, it is advised as this allows for easy remote repository creation.

To fork this repository press the the fork button at the top of the page,
<TODO Picture of Fork Button>

<div align=center>
    <p>Temporary Alt for Fork Button Picture</p>
</div>

### Step 1: Clone the Repository

<TODO Add in the option for repo name>

To get this repository onto your machine and into a local repository you need to clone the repository.
Whilst it is not required, it is best to clone with a depth of 1 so only the last commit is cloned (shallow clone), and it should be cloned with a defined destination directory.

This can be done from the terminal (or git-bash) by using the following command,

```bash
git clone --depth=1 https://github.com/skyeBreach/breached-turbo.git [project_path]
```

Or if you are using SSH to clone the repo,

```bash
git clone --depth=1 git@github.com:skyeBreach/breached-turbo.git [project_path]
```

Where `[project_path]` can be optionally added to specify the relative path to clone the boilerplate.

### Step 2: Navigate to Local Repository

Next you need to change directory to the newly cloned repository,

```bash
cd [project_path]
```

Where `[project_path]` is either the path specified in [Step 1](#step-1-clone-the-repository), or if one was not
specified then it will be `breached-turbo` as it is the default project name.

### Step 3: Install Dependencies

Next you need to install the dependencies for all packages in the monorepo, this can be done by running the following
command in the root (top-level) folder for the monorepo.

```bash
bun install
```

Running this command will also create or update the `bun.lockb` file which locks this repository to the
[Bun](https://bun.sh/) runtime, which is necessary for BreachedTurbo.

### Step 4: Building

```bash
bun turbo build
```

## License

© 2024, [Skye Benson](https://github.com/skyeBreach). All Rights Reserved.

See [LICENSE](LICENSE) for more information on the license that this repository uses.
