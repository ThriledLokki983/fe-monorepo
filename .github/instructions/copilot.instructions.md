---
applyTo: '**'
---
Coding standards, domain knowledge, and preferences that AI should follow.

# AI Coding Standards & Guidelines

## Environment Setup
- **Workspace**: Nx 21.1.2 monorepo
- **Package Manager**: Yarn (use for all package management)
- **Available Tools**: Nx MCP server, GitHub MCP server, PostgreSQL MCP, Context 7 MCP server for documentation

## Development Workflow

### Core Process
1. **Explore** → **Plan** → **Confirm** → **Code** → **Commit**
2. **Write Tests** → **Commit** → **Implement Code** → **Iterate** → **Commit**
3. **Write Code** → **Screenshot Results** (when applicable) → **Iterate**

### Documentation & Context
- Always reference Context 7 for documentation
- Maintain clear documentation throughout development

### Version Control & GitHub
- **Git Commands**: Always use `--no-pager` flag to prevent pagination issues
- **GitHub Operations**: Use GitHub CLI (`gh`) for all Git interactions
- **GitHub API**: Use GitHub MCP server for PRs, issues, and GitHub-related tasks

### Database Operations
- Use PostgreSQL MCP server for all database interactions

## Tool Usage Priority
1. Leverage available MCP servers (Nx, GitHub, PostgreSQL, Context 7) for development tasks
2. Use GitHub CLI (`gh`) for Git operations
3. Use Yarn for package management and dependency installation
2. Follow the established workflow patterns
3. Maintain consistency with Yarn package management
