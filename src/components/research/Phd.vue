<template>
  <v-container>
  <v-row align="center" justify="center">
    <v-col cols=12>
      <v-card
        class="mx-auto"
        outlined
      >
        <v-card-title>PhD Research Topic:</v-card-title>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Thesis title</div>
            <v-list-item-subtitle>
              Modelling, Simulating and Emulating Distributed Applications in Swarms of Cyber-Physical Systems Deployed in Dynamic Networks
            </v-list-item-subtitle>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">Main topics</div>
              <ul class="body-2 mb-4">
                <li>Cyber-Physical Systems Swarms</li>
                <li>Distributed Computing</li>
                <li>Network Traffic Flow</li>
                <li>Wireless Networks</li>
              </ul>
            </v-list-item-text>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">Abstract</div>
                <div class="caption mb-4">
                  The research field in distributed systems has witnessed a recent growing interest
                  in wireless mobile distributed computing, i.e. distributed algorithms deployed in dynamic
                  networks. Such systems introduce new challenges due to their time-varying topologies, which
                  hinder the performance and safety guarantees of algorithms that are fundamental building
                  blocks of more complex distributed algorithms. The main focus of this work is to establish
                  different ways to study such systems via emulation and simulation and to propose some
                  techniques to deploy applications in dynamic networks. We evaluated different data flow
                  paradigms, such as many-to-many distributed storage, one-many computational offloading,
                  and many-to-many decentralized swarm control and data load-balancing.
                  <br>
                  We adopted the quantitative approach as a cornerstone methodology, using simulation
                  and emulation to collect data for analysis. Even though there are many discrete simulators in
                  the state-of-the-art, there was a gap for emulation tools applied to mobile ad hoc computing.
                  Some important features were missing, such as a full-scale emulated deployment environment
                  where prototypes coexist with off-the-shelf applications and more options for mobility control.
                  This work proposes MACE, a framework that enables the emulation of mobile distributed
                  applications in a virtual environment so that the scenarios and topologies composed by mobile
                  wireless nodes can be easily modified. Since emulation requires that the tests run in wall time,
                  the need for a fast simulator arose. Therefore, we designed, implemented and validated a
                  fluid model that simulates traffic flow in mobile ad hoc networks. With this model, we finally
                  implemented a simulation tool that enables fast algorithm and parameter analysis and can
                  potentially be embedded in constrained nodes for in-flight mission re-evaluation. The fluid
                  model can scale to large topologies with hundreds of nodes and could complete experiments
                  running stress workloads with simulation time shorter than the simulation time horizon. It
                  can also be configured with bounded and unbounded network queues, use mixed mobility
                  models and control laws, and model different applications running in the application layer
                  mixed with synthetic traffic injection. By studying different control laws, we can reduce
                  the probability of enduring network partitions and enhance the traffic balance to reduce the
                  formation of bottlenecks that hinder the application’s performance.
                  <br>
                  Our work also encompassed the proposal of some applications related to the domain of
                  UTM, such as optimized edge-assisted offloading algorithms for swarms of UAVs that can be
                  potentially used for UTM Distributed Detect and Avoid systems. Moreover, we also propose
                  a distributed position tracking data layer for very low-level airspace using State Machine
                  Replication and could achieve low end-to-end latencies even with a high number of replicas.
                </div>
            </v-list-item-text>
          </v-list-item-content>
        </v-list-item>
        <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            href="/thesis.pdf"
            target="_blank"
          >
          Download Thesis
          <v-icon right dark>mdi-cloud-download</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
  })
}
</script>
