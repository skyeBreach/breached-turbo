<div align=center>
    <h1>Breached-Turbo</h1>
    <p>Breached-Turbo is a monorepo boilerplate tooled using <a href='https://turbo.build/'>Turborepo</a> with <a href='https://pnpm.io/'>pnpm</a>, that prioritises the developer's time and experience first.</p>
    <hr/>
</div>

Breached-Turbo has been built to allow for new apps and packages to be created quickly with minimal configuration. This boilerplate provides a solid foundation for the developer without adding too much unnecessary code or dependencies that are difficult and time consuming to remove.

> [!IMPORTANT]
> Whilst this repository is free to use, we do ask that the user's of the repo properly attribute it so others can easily find and use it!

## Features

- Powered by [Turborepo](https://turbo.build/)
- [TypeScript](https://www.typescriptlang.org) for Type Safety and Checking

## Template Folder Structure

This section lays out the folder structure used by this boilerplate and notes any important files in the structure. 
We do not list all the files/folders, and instead list those that we deem to be important.

```bash
.
├── .vscode                 # Stores all config files for VSCode, and includes a set of recommended defaults
│   ├── extensions.json         # Recommended extensions
│   ├── launch.json             # Recommended debugger configuration
│   └── settings.json           # Recommended settings
│
├── apps                    # Contains all application packages that this monorepo deploys
│   ├── Dashboard               # Deploys the admin dashboard for the monorepo
│   ├── Documentation           # Deploys the documentation website for the monorepo
│   ├── Workshop                # Deploys a Storybook app that imports the 'design-system' package
│   └── Landing                 # Deploys the landing/marketing website for the monorepo
│
├── config                  # Holds all packages that contain and provide configuration files to this monorepo
│   ├── eslint                  # Provides the common eslint config files for the monorepo
│   ├── turbo                   # 
│   └── typescript              # Provides the common typescript config files for the monorepo
│
├── packages                # Holds the shared packages, modules, and libraries that the app's will use
│   └── design-system           # Shared component library package used by the apps
│
├── scripts                 # Stores all shared script files and utility scripts that are needed by the monorepo
│
├── tooling                 # Holds all repository tools and tooling packages for the monorepo
│
├── pnpm-workspace.yaml     # Defines the locations of the child packages this repo has
├── package.json	        # Project dependencies and scripts
├── turbo.json              # Turbo configuration file
├── LICENSE                 # License file
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
    git clone --depth=1 <HTTPS URL> <Project Name>
```

Or if you are using SSH to clone the repo,
```bash
    git clone --depth=1 <SSH URL> <Project Name>
```

### Step 2: Navigate to Local Repository

Next you need to change directory to the newly cloned repository,
```bash
    cd <Project Name>
```

### Step 3: Install Dependencies

Next you need to run your package managers dependency installation command to correctly initialise and install your project. 

For PNPM run,
```bash
    pnpm install
```

For NPM run,
```bash
    npm install
```

For Yarn run,
```bash
    yarn install
```

Running one of these commands will also create a `*-lock.yaml` file that will lock you into this package manager.

## Configuration

This Boilerplate requires extra configuration after it is installed, the steps for configuration are as follows:

### Default Value Configuration

Throughout this projects repository there are several options that need to be changed from their default values for it to properly work.

These objects are all marked by a comment that are coloured in red and follow the formats,

For `'JavaScript'` and `'TypeScript'` style comments,
```
    // !ConfigFixMe: <Information About the Configuration Option>
```

or for `'.env'` style comments
```
    # !ConfigFixMe: <Information About the Configuration Option>
```

Once these options have been configured, the marker comments may be removed as they will no longer serve a purpose.

## License

© 2024, [Skye Benson](https://github.com/skyeBreach). All Rights Reserved.

See [LICENSE](LICENSE) for more information on the license that this repository uses.

