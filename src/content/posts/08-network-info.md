---
title: "Rust Based Network Information Program For Linux"
publishedAt: 2024-11-15
description: "A Rust tool for quick network diagnostics: geographic info, local IP, and speed tests."
slug: "rust-network-info-tool"
isPublish: true
---

# Network Info Program

A Rust-based application that provides key network information, including geographic details, local IP address, and internet speed test results. This program is designed for developers, network administrators, and enthusiasts looking for a quick way to diagnose and analyze network details.

## Features

- **Geographic Information Retrieval**: Fetches data like IP address, ISP, country, region, and city using the IP-API.
- **Local IP Detection**: Uses system commands to fetch the local IP address of the machine.
- **Internet Speed Test**: Runs a speed test using the speedtest-cli tool to measure download and upload speeds.
- **Simple and Lightweight**: Written in Rust for high performance with minimal dependencies.

## Dependencies

To run this program, ensure the following dependencies are installed:

### Rust Dependencies:
- `reqwest`: For making HTTP requests.
- `serde`: For parsing JSON responses from the API.
- `tokio`: For asynchronous runtime in Rust.

Install them using Cargo:

```bash
cargo add reqwest serde tokio
```

### System Requirements:
- **Rust**: Install the Rust programming language via rustup.
- **speedtest-cli**: Required for internet speed tests. Install it using:

```bash
sudo apt install speedtest-cli
```

## Installation

Follow these steps to set up the program:

1. Clone the repository:

   ```bash
   git clone https://github.com/teztarrar/network_info.git
   cd network-info
   ```

2. Build the project:

   ```bash
   cargo build --release
   ```

3. Install the required system dependencies:
   Ensure speedtest-cli is installed as outlined in the dependencies section.

## Usage

To use the program, run the following command:

```bash
cargo run --release
```

### What It Does:
- **Fetches Geographic Information**: Retrieves data like your IP address, ISP, country, region, and city using the IP-API.
- **Displays Local IP Address**: Detects the local IP address of the machine using the `hostname -I` command.
- **Conducts Internet Speed Test**: Measures and displays the download and upload speeds using speedtest-cli.

### Example Output

```
Geographic Information:
IP: 192.168.x.x
ISP: Your ISP
Country: United States
Region: California
City: San Francisco

Local IP Address:
192.168.1.100

Internet Speed Test:
Download: 50.00 Mbps
Upload: 10.00 Mbps
```

## Advanced Usage

### Modify API URL
To use a custom API for geographic information, edit the `API_URL` variable in the source code.

### Customize Speed Test Tool
Replace speedtest-cli with an alternative CLI tool if needed. Update the command in the relevant section of the code.

## Common Issues

### Permission Denied for speedtest-cli
Ensure speedtest-cli is installed and executable:

```bash
sudo chmod +x /usr/bin/speedtest-cli
```

### Network Connectivity Problems
Check your internet connection. The program requires connectivity to fetch geographic information and perform speed tests.

## Contributing

Contributions are welcome! Feel free to:

- Open issues to report bugs or suggest enhancements.
- Submit pull requests with improvements or new features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## About

Developed with ❤️ using Rust. This program simplifies network diagnostics by combining fast performance with accurate results.