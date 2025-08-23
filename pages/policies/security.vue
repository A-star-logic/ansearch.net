<script setup lang="ts">
import { Prose } from '../../components/ui/prose';
</script>

<template>
  <Prose>
    <h1>Security overview</h1>
    <p>
      We are aware our software has access to sensitive information that belongs
      to your organisation, and we are taking all the necessary steps to ensure
      it is never going in the wrong hands.
    </p>
    <h2>No passwords</h2>
    <p>
      Have you noticed? We do not use a single password in our application. This
      means by default our app is a lot more secure than using passwords.
    </p>
    <p>
      Make sure your email, Google or Microsoft accounts are protected with 2
      factor authentication and you are good to go (and please ensure the 2FA is
      not using SMS, those are NOT secure).
    </p>
    <h2>Encryption</h2>
    <p>We encrypt your data on three points:</p>
    <ol>
      <li>
        In transit via https, both between you and us, but also between our
        various services. We never transfer data unencrypted.
      </li>
      <li>
        At rest via our third party services, this means when your data is not
        actively in use, it will be encrypted by our partners using industry
        standard (AES-256 GCM, which is a strong algorithm that can even protect
        against quantum computers)
      </li>
      <li>
        At work (In application) for some extra sensitive information such as
        your OAuth tokens, in this case we are using AES-256 GCM.
      </li>
    </ol>
    <h2>EU/UK Data residency & strict processes</h2>
    <p>
      Your data is stored and used in the European Union or the United Kingdom.
    </p>
    <p>
      We also have strict rules and strong permission control for access to any
      production data, and we are using different servers altogether during
      development.
    </p>
    <h2>Data only you can access</h2>
    <p>
      All of our services are relying on the industry standard OAuth, with the
      least permissions possible.
    </p>
    <p>
      Oauth allows you to control which data we have access to, and ensure
      strict permission controls. This means you can pick exactly what will be
      shared with us, and that you will never see the data of someone else, even
      from your own organisation.
    </p>
    <h2>Trusted AI providers & third party processors</h2>
    <p>
      We use exclusively AI providers we trust, we avoid providers that may have
      conflict of interest or that do not offer strict and clear data
      protection. Additionally, for all of our third party processors, we
      rigorously inspect their terms and verify they are all certified with SOC2
      or ISO 27001.
      <NuxtLink to="./subprocessors"
        >You can find the list of our sub-processor here</NuxtLink
      >.
    </p>
    <h2>Certifications & compliance</h2>
    <p>
      While our business is currently not certified, we are compliant and
      working towards certification with some of the industry standards.
    </p>
    <h3>Cyber essentials plus (UK)</h3>
    <p>
      We have been certified in the past, and we are still compliant (we know
      our stuff pretty well too,
      <NuxtLink
        to="https://astarlogic.com/blog/startups/cyber-essentials-plus-with-linux"
      >
        you can check out this blog from our CEO</NuxtLink
      >). We will get certified again whenever we can.
    </p>
    <h3>ISO 27001</h3>
    <p>
      Our team is actively working towards compliance with ISO 27001; and just
      like cyber essentials plus, we will do the certification whenever
      possible.
    </p>
  </Prose>
</template>
