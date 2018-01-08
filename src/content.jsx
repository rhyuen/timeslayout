import React, {Component} from "react";
import ContentSidePanel from "./contentsidepanel.jsx";
import styled from "styled-components";

const ContentContainer = styled.div`
    margin-top: calc(4vh + 4vh);
    align-self:center;
    display: flex;
    width: 1024px;    
    justify-content: center;
`;
const ContentElements = styled.div`
    width: 65%;    
    box-sizing: border-box;
    padding-right: 15%;         
`;
const ContentElementsItem = styled.p`    
    color: gray;
    line-height: 3vh;
    font-size: 14px;
    margin-top: 0;
`;

export default () => (
   <ContentContainer>
    <ContentElements>
        <ContentElementsItem>
            We’re pleased to announce the delivery of Kubernetes 1.9, our fourth and final release this year.
            
            Today’s release continues the evolution of an increasingly rich feature set, more robust stability, and even greater community contributions. As the fourth release of the year, it gives us an opportunity to look back at the progress made in key areas. Particularly notable is the advancement of the Apps Workloads API to stable. This removes any reservations potential adopters might have had about the functional stability required to run mission-critical workloads. Another big milestone is the beta release of Windows support, which opens the door for many Windows-specific applications and workloads to run in Kubernetes, significantly expanding the implementation scenarios and enterprise readiness of Kubernetes.
            
            Workloads API GA
            We’re excited to announce General Availability (GA) of the apps/v1 Workloads API, which is now enabled by default. The Apps Workloads API groups the DaemonSet, Deployment, ReplicaSet, and StatefulSet APIs together to form the foundation for long-running stateless and stateful workloads in Kubernetes. Note that the Batch Workloads API (Job and CronJob) is not part of this effort and will have a separate path to GA stability.
            
            Deployment and ReplicaSet, two of the most commonly used objects in Kubernetes, are now stabilized after more than a year of real-world use and feedback. SIG Apps has applied the lessons from this process to all four resource kinds over the last several release cycles, enabling DaemonSet and StatefulSet to join this graduation. The v1 (GA) designation indicates production hardening and readiness, and comes with the guarantee of long-term backwards compatibility.
            
            Windows Support (beta)
            Kubernetes was originally developed for Linux systems, but as our users are realizing the benefits of container orchestration at scale, we are seeing demand for Kubernetes to run Windows workloads. Work to support Windows Server in Kubernetes began in earnest about 12 months ago. SIG-Windows has now promoted this feature to beta status, which means that we can evaluate it for usage.
            
            Storage Enhancements
            From the first release, Kubernetes has supported multiple options for persistent data storage, including commonly-used NFS or iSCSI, along with native support for storage solutions from the major public and private cloud providers. As the project and ecosystem grow, more and more storage options have become available for Kubernetes. Adding volume plugins for new storage systems, however, has been a challenge.
            
            Container Storage Interface (CSI) is a cross-industry standards initiative that aims to lower the barrier for cloud native storage development and ensure compatibility. SIG-Storage and the CSI Community are collaborating to deliver a single interface for provisioning, attaching, and mounting storage compatible with Kubernetes.
            
            Kubernetes 1.9 introduces an alpha implementation of the Container Storage Interface (CSI), which will make installing new volume plugins as easy as deploying a pod, and enable third-party storage providers to develop their solutions without the need to add to the core Kubernetes codebase.
            
            Because the feature is alpha in 1.9, it must be explicitly enabled and is not recommended for production usage, but it indicates the roadmap working toward a more extensible and standards-based Kubernetes storage ecosystem.
            
            Additional Features
            Custom Resource Definition (CRD) Validation, now graduating to beta and enabled by default, helps CRD authors give clear and immediate feedback for invalid objects
            
            SIG Node hardware accelerator moves to alpha, enabling GPUs and consequently machine learning and other high performance workloads
            
            CoreDNS alpha makes it possible to install CoreDNS with standard tools
            
            IPVS mode for kube-proxy goes beta, providing better scalability and performance for large clusters
            
            Each Special Interest Group (SIG) in the community continues to deliver the most requested user features for their area. For a complete list, please visit the release notes.
            
            Availability
            Kubernetes 1.9 is available for download on GitHub. To get started with Kubernetes, check out these interactive tutorials. 
            
            Release team
            This release is made possible through the effort of hundreds of individuals who contributed both technical and non-technical content. Special thanks to the release team led by Anthony Yeh, Software Engineer at Google. The 14 individuals on the release team coordinate many aspects of the release, from documentation to testing, validation, and feature completeness.
            
            As the Kubernetes community has grown, our release process has become an amazing demonstration of collaboration in open source software development. Kubernetes continues to gain new users at a rapid clip. This growth creates a positive feedback cycle where more contributors commit code creating a more vibrant ecosystem. 
            
            Project Velocity
            The CNCF has embarked on an ambitious project to visualize the myriad contributions that go into the project. K8s DevStats illustrates the breakdown of contributions from major company contributors. Open issues remained relatively stable over the course of the release, while forks rose approximately 20%, as did individuals starring the various project repositories. Approver volume has risen slightly since the last release, but a lull is commonplace during the last quarter of the year. With 75,000+ comments, Kubernetes remains one of the most actively discussed projects on GitHub.
            
            User highlights
            According to the latest survey conducted by CNCF, 61 percent of organizations are evaluating and 83 percent are using Kubernetes in production. Example of user stories from the community include:
            
            BlaBlaCar, the world’s largest long distance carpooling community connects 40 million members across 22 countries. The company has about 3,000 pods, with 1,200 of them running on Kubernetes, leading to improved website availability for customers.
            
            Pokémon GO, the popular free-to-play, location-based augmented reality game developed by Niantic for iOS and Android devices, has its application logic running on Google Container Engine powered by Kubernetes. This was the largest Kubernetes deployment ever on Google Container Engine.
            
            Is Kubernetes helping your team? Share your story with the community. 
            
            Ecosystem updates
            Announced on November 13, the Certified Kubernetes Conformance Program ensures that Certified Kubernetes™ products deliver consistency and portability. Thirty-two Certified Kubernetes Distributions and Platforms are now available. Development of the certification program involved close collaboration between CNCF and the rest of the Kubernetes community, especially the Testing and Architecture Special Interest Groups (SIGs). The Kubernetes Architecture SIG is the final arbiter of the definition of API conformance for the program. The program also includes strong guarantees that commercial providers of Kubernetes will continue to release new versions to ensure that customers can take advantage of the rapid pace of ongoing development.
            
            CNCF also offers online training that teaches the skills needed to create and configure a real-world Kubernetes cluster.
            
            KubeCon
            For recorded sessions from the largest Kubernetes gathering, KubeCon + CloudNativeCon in Austin from December 6-8, 2017, visit YouTube/CNCF. The premiere Kubernetes event will be back May 2-4, 2018 in Copenhagen and will feature technical sessions, case studies, developer deep dives, salons and more! CFP closes January 12, 2018. 
            
            Webinar
            Join members of the Kubernetes 1.9 release team on January 9th from 10am-11am PT to learn about the major features in this release as they demo some of the highlights in the areas of Windows and Docker support, storage, admission control, and the workloads API. Register here.
            
            Get involved:
            The simplest way to get involved with Kubernetes is by joining one of the many Special Interest Groups (SIGs) that align with your interests. Have something you’d like to broadcast to the Kubernetes community? Share your voice at our weekly community meeting, and through the channels below.
            
            Thank you for your continued feedback and support.
            Post questions (or answer questions) on Stack Overflow
            Join the community portal for advocates on K8sPort
            Follow us on Twitter @Kubernetesio for latest updates
            Chat with the community on Slack
            Share your Kubernetes story.
        </ContentElementsItem>
    </ContentElements>
    <ContentSidePanel/>        
   </ContentContainer>
);
