# client

pc端
# AccessKey ID Secret

LTAI4Fcb2xbQ2moydGEBLMWx

T7VRbi32WRsXSlgd4iK0R959StwOx5


docker run -d \
    -p 8000:80 \
    --restart=always \
    --name punchClient \
registry.cn-hangzhou.aliyuncs.com/punch/client:0.1


docker run -d \
    -p 8000:80 \
    --restart=always \
    --name punchClient \
registry.cn-hangzhou.aliyuncs.com/punch/occlient:0.2

