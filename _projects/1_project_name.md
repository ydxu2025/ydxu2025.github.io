---
layout: page
title: Machine Learning Systems
description: making deep learning training and inference faster
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

Large language model (LLM) training and inference systems are highly complex and rapidly evolving. Optimizing their efficiency remains a critical challenge, largely due to the intricate coupling among algorithms, software, and hardware. Moreover, the massive scale of LLM systems makes them inherently fragile: a single point of failure can disrupt the entire cluster, while a single straggler device can delay synchronization and waste substantial resources. These vulnerabilities underscore the importance of ensuring system reliability and stability. We are currently exploring three interrelated subprojects, including scale-up networks (SuperPods), reinforcement learning frameworks, and reliability issues. 

<br>

**Selected Papers**

    
    [USENIX NSDI 2025] Holmes: Localizing Irregularities in LLM Training with Mega-scale GPU Clusters
    

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projectimg/detection_case.png" title="Anomaly Detection" class="img-fluid rounded z-depth-1 mx-auto d-block" %}
    </div>
</div>
<div class="caption">
    Accurate and rapid detection of anomalous devices (straggler) when training LLMs in a mega-scale GPU cluster, just like Holmes (福尔摩斯).
</div>

    
    [IEEE Infocom 2025] MemFerry: A Fast and Memory Efficient Offload Training Framework with Hybrid GPU Computation
    

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projectimg/system_overview.png" title="system overview" class="img-fluid rounded z-depth-1 mx-auto d-block" max-width="30%" width="30%" %}
    {% include figure.liquid loading="eager" path="assets/img/projectimg/GPU_access_main_memory.png" title="memory access" class="img-fluid rounded z-depth-1 mx-auto d-block" max-width="30%" width="30%" %}
    {% include figure.liquid loading="eager" path="assets/img/projectimg/shadow_model.png" title="shadow memory" class="img-fluid rounded z-depth-1 mx-auto d-block" max-width="30%" width="30%" %}
    </div>
</div>
<div class="caption">
    Strategically transferring gradients and model parameters between GPU HBM and CPU host memory in order to accelerate LLM training when the HBM size is limited, just like a Ferry (渡船). 
</div>

    
    [IEEE TPDS 2023] Accelerating Distributed DNN Training via Transport Layer Scheduling
    

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projectimg/mercury_toy_example.png" title="mercury toy example" class="img-fluid rounded z-depth-1 mx-auto d-block" max-width="30%" width="30%" %}
    {% include figure.liquid loading="eager" path="assets/img/projectimg/mercury_system.png" title="mercury system" class="img-fluid rounded z-depth-1 mx-auto d-block" max-width="50%" width="50%" %}
    </div>
</div>

<div class="caption">
    Accelerating deep learning training in classical distributed parameter-server architecture, where the key idea is to shift tensor priority scheduling and parameter aggregation to the slice just above the transport layer. 
</div>


