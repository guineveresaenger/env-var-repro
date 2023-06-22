import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";

const docker_password = process.env.DOCKER_PW


const sshtest = new docker.Image("ssh-test", {
    imageName: "gsaenger/june:anton",
    registry: {
        server: "docker.io",
        username: "gsaenger",
        password: docker_password,
    },

    skipPush: true,
    build: {
        context: ".",
        dockerfile: "Dockerfile",
        // args: {
        //     "BUILDKIT_INLINE_CACHE": "1"
        // },
    // builderVersion: "BuilderV1",
    //     cacheFrom: {
    //         images: ["docker.io/gsaenger/test-stages"]
    //     },
        platform: "linux/amd64",
        // target: "base"

    }
});

export const imageName = sshtest.imageName;
export const serveraddr = sshtest.registryServer;
