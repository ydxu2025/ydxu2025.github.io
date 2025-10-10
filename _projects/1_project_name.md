---
layout: page
title: Machine Learning Systems
description: making deep learning training and inference faster
img: assets/img/no1.png
importance: 1
category: work
related_publications: true
---

<div class="row">
    <div class="col-12">
        <p>Large language model (LLM) training and inference systems are highly complex and rapidly evolving. Optimizing their efficiency remains a critical challenge, largely due to the intricate coupling among algorithms, software, and hardware. Moreover, the massive scale of LLM systems makes them inherently fragile: a single point of failure can disrupt the entire cluster, while a single straggler device can delay synchronization and waste substantial resources. These vulnerabilities underscore the importance of ensuring system reliability and stability. We are currently exploring three interrelated subprojects, including scale-up networks (SuperPods), reinforcement learning frameworks, and reliability issues. We work closely with researchers from Huawei, Tencent, Alibaba, Ants and telecom companies.</p>
    </div>
</div>

<br>

<h3 class="mt-5 mb-4">Selected Papers</h3>

<!-- 第一篇论文 -->
<div class="mb-8">
    <h4 class="text-primary mb-3">[USENIX NSDI 2025] Holmes: Localizing Irregularities in LLM Training with Mega-scale GPU Clusters</h4>
    
    <div class="row">
        <div class="col-12">
            {% include figure.liquid 
                loading="eager" 
                path="assets/img/projectimg/detection_case.png" 
                title="Anomaly Detection" 
                alt="Anomaly detection in GPU clusters"
                class="img-fluid rounded z-depth-1 mx-auto d-block" 
                max-width="80%"
            %}
        </div>
    </div>
    
    <div class="caption text-center mt-3 text-muted">
        Accurate and rapid detection of anomalous devices (straggler) when training LLMs in a mega-scale GPU cluster, just like Holmes (福尔摩斯).
    </div>
</div>

<!-- 第二篇论文 -->
<div class="mb-8">
    <h4 class="text-primary mb-3">[IEEE Infocom 2025] MemFerry: A Fast and Memory Efficient Offload Training Framework with Hybrid GPU Computation</h4>
    
    <div class="row gx-4">
        <div class="col-4">
            {% include figure.liquid 
                loading="eager" 
                path="assets/img/projectimg/system_overview.png" 
                title="system overview" 
                alt="System overview diagram"
                class="img-fluid rounded z-depth-1 mx-auto d-block" 
                max-width="100%" 
                width="100%" 
            %}
        </div>
        <div class="col-4">
            {% include figure.liquid 
                loading="eager" 
                path="assets/img/projectimg/GPU_access_main_memory.png" 
                title="memory access" 
                alt="GPU access main memory diagram"
                class="img-fluid rounded z-depth-1 mx-auto d-block" 
                max-width="100%" 
                width="100%" 
            %}
        </div>
        <div class="col-4">
            {% include figure.liquid 
                loading="eager" 
                path="assets/img/projectimg/shadow_model.png" 
                title="shadow memory" 
                alt="Shadow memory model diagram"
                class="img-fluid rounded z-depth-1 mx-auto d-block" 
                max-width="100%" 
                width="100%" 
            %}
        </div>
    </div>
    
    <div class="caption text-center mt-3 text-muted">
        Strategically transferring gradients and model parameters between GPU HBM and CPU host memory in order to accelerate LLM training when the HBM size is limited, just like a Ferry (渡船). 
    </div>
</div>

<!-- 第三篇论文 -->
<div class="mb-5">
    <h4 class="text-primary mb-3">[IEEE TPDS 2023] Accelerating Distributed DNN Training via Transport Layer Scheduling</h4>
    
    <div class="row gx-4 align-items-center">
        <div class="col-4">
            {% include figure.liquid 
                loading="eager" 
                path="assets/img/projectimg/mercury_toy_example.png" 
                title="mercury toy example" 
                alt="Mercury toy example diagram"
                class="img-fluid rounded z-depth-1 mx-auto d-block" 
                max-width="100%" 
                width="100%" 
            %}
        </div>
        <div class="col-8">
            {% include figure.liquid 
                loading="eager" 
                path="assets/img/projectimg/mercury_system.png" 
                title="mercury system" 
                alt="Mercury system architecture diagram"
                class="img-fluid rounded z-depth-1 mx-auto d-block" 
                max-width="100%" 
                width="100%" 
            %}
        </div>
    </div>
    
    <div class="caption text-center mt-3 text-muted">
        Mercury (赫耳墨斯) accelerates deep learning training in classical distributed parameter-server architecture, where the key idea is to shift tensor priority scheduling and parameter aggregation to the slice just above the transport layer. 
    </div>
</div>
