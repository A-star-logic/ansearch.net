<script setup lang="ts">
import Content from '../../components/ui/content/content.vue';
import { Copy } from '../../components/ui/copy';
</script>

<template>
  <Content>
    <Copy>
      <template #header-title>
        <h1>Ansearch sub-processors</h1>
      </template>
      <template #content>
        <h2>About our sub-processors</h2>
        <p>
          Ansearch engage with a number of third party processors to assist in
          delivering our services. These subprocessors are service providers who
          may have access to or process service data (which may contain personal
          data) on behalf of Ansearch and our customers.
        </p>
        <p>
          This page provides transparency regarding the identity, location, and
          role of each subprocessor Ansearch engages. We maintain strict data
          protection standards and require all subprocessors to meet our
          security and privacy requirements.
        </p>

        <h2>Subprocessor Management</h2>
        <p>
          Ansearch conducts thorough due diligence when evaluating new
          subprocessors. We ensure they provide adequate protection for the
          personal data they process on our behalf.
        </p>
        <p>
          This list is updated from time to time depending on the needs from
          Ansearch. To stay updated, please visit this page regularly or request
          a regular email from our team.
        </p>

        <h2>Current Subprocessors</h2>
        <iframe
          class="frame"
          src="https://docs.google.com/document/d/e/2PACX-1vSoLir-wbUP63OtE7tBxAnRBz6S-VBKeZR5AyIH_TUlmdm802k-G5WFXqR4VFComoehQEwY8P-qnZFo/pub?embedded=true"
        >
          Loading...
        </iframe>
      </template>
    </Copy>
  </Content>
</template>

<style scoped>
.frame {
  width: 750px;
  height: 750px;
}
</style>
