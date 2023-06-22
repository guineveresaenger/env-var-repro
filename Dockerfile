
FROM --platform=linux/amd64 ubuntu AS base
RUN echo "base"


FROM base AS stage1
RUN echo "stage1"

FROM base AS stage2
RUN echo "stage2 looks like update but is a reset lol"

