FROM dbeaver/base-java

MAINTAINER DBeaver Corp, devops@dbeaver.com

COPY cloudbeaver /opt/cloudbeaver

EXPOSE 8978

RUN find /opt/cloudbeaver -type d -exec chmod 775 {} \; && \
    chmod +x /opt/cloudbeaver/run-server.sh && \
    ls -la /opt/cloudbeaver/ && \
    cat /opt/cloudbeaver/run-server.sh

WORKDIR /opt/cloudbeaver/

# Use shell form of ENTRYPOINT to allow variable expansion and error reporting
ENTRYPOINT exec ./run-server.sh || (echo "Failed to execute run-server.sh" && exit 1)
